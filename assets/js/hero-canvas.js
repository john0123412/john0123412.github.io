/* ============================================================
   hero-canvas.js — "agent network" backdrop
   Nodes drift and link; the pointer perturbs the field like a
   task being routed through the mesh. Fine pointers only.
   ============================================================ */
(function () {
  'use strict';

  var canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var nodes = [];
  var W = 0, H = 0;
  var pointer = { x: -9999, y: -9999, active: false };

  var LINK_DIST = 130;
  var ACID = '214, 255, 75';
  var INK = '242, 242, 237';

  function resize() {
    var rect = canvas.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    seed();
  }

  function seed() {
    var density = Math.round((W * H) / 26000);
    var count = Math.max(26, Math.min(90, density));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() < 0.12 ? 2.1 : Math.random() * 1.1 + 0.5,
        hub: Math.random() < 0.12
      });
    }
  }

  function step() {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx; n.y += n.vy;

      // Pointer perturbation: gentle attraction within range
      if (pointer.active) {
        var dx = pointer.x - n.x, dy = pointer.y - n.y;
        var d2 = dx * dx + dy * dy;
        if (d2 < 26000 && d2 > 1) {
          var f = 0.012 / Math.max(d2 / 9000, 0.35);
          n.vx += dx * f * 0.02;
          n.vy += dy * f * 0.02;
        }
      }

      // Damping + speed clamp
      n.vx *= 0.995; n.vy *= 0.995;
      var sp = Math.hypot(n.vx, n.vy);
      if (sp > 0.6) { n.vx *= 0.6 / sp; n.vy *= 0.6 / sp; }

      if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Links
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var a = nodes[i], b = nodes[j];
        var dx = a.x - b.x, dy = a.y - b.y;
        var d = Math.hypot(dx, dy);
        if (d < LINK_DIST) {
          var alpha = (1 - d / LINK_DIST) * 0.16;
          var hubLink = a.hub || b.hub;
          ctx.strokeStyle = 'rgba(' + (hubLink ? ACID : INK) + ',' + (hubLink ? alpha * 1.5 : alpha) + ')';
          ctx.lineWidth = hubLink ? 0.7 : 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Nodes
    for (var k = 0; k < nodes.length; k++) {
      var n = nodes[k];
      ctx.fillStyle = n.hub ? 'rgba(' + ACID + ',0.85)' : 'rgba(' + INK + ',0.4)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();

      if (n.hub) {
        var pulse = 2.6 + Math.sin(Date.now() / 700 + k) * 1.2;
        ctx.strokeStyle = 'rgba(' + ACID + ',0.18)';
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  var visible = true;
  function loop() {
    if (visible) { step(); draw(); }
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', function () {
    visible = !document.hidden;
  });

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('pointermove', function (e) {
      var rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = pointer.y > 0 && pointer.y < rect.height;
    }, { passive: true });
    window.addEventListener('pointerleave', function () { pointer.active = false; });
  }

  resize();
  requestAnimationFrame(loop);
})();

/* ============================================================
   main.js — preloader · clock · nav · cursor · reveals ·
   text scramble · copy command · back-to-top
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Preloader ---------- */
  var preloader = document.getElementById('preloader');
  var preLog = document.getElementById('preloaderLog');
  var preCount = document.getElementById('preloaderCount');

  var BOOT_LINES = [
    'INIT · junjohnny.me',
    'LOAD AGENT FRAMEWORK ......... <span class="ok">OK</span>',
    'BIND SCOPE-GATED SECURITY .... <span class="ok">OK</span>',
    'RENDER PORTFOLIO ............. <span class="ok">OK</span>'
  ];

  function runPreloader() {
    if (!preloader || reduceMotion) {
      finishPreloader(true);
      return;
    }
    var started = performance.now();
    var DURATION = 1250;
    var lineEls = [];

    BOOT_LINES.forEach(function (line) {
      var el = document.createElement('div');
      el.innerHTML = line;
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.3s ease';
      preLog.appendChild(el);
      lineEls.push(el);
    });

    // setInterval keeps counting even when the tab is throttled or occluded
    var timer = setInterval(function () {
      var t = Math.min((performance.now() - started) / DURATION, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      var pct = Math.round(eased * 100);
      preCount.textContent = (pct < 10 ? '0' : '') + pct;

      lineEls.forEach(function (el, i) {
        if (t >= (i + 0.6) / BOOT_LINES.length) el.style.opacity = '1';
      });

      if (t >= 1) {
        clearInterval(timer);
        setTimeout(function () { finishPreloader(false); }, 220);
      }
    }, 50);

    // Failsafe: never trap the user behind the preloader
    setTimeout(function () {
      if (document.body.classList.contains('is-loading')) {
        clearInterval(timer);
        finishPreloader(false);
      }
    }, 4000);
  }

  function finishPreloader(instant) {
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-ready');
    if (preloader && !instant) {
      preloader.classList.add('preloader--done');
      setTimeout(function () { preloader.remove(); }, 1000);
    } else if (preloader) {
      preloader.remove();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runPreloader);
  } else {
    runPreloader();
  }

  /* ---------- Hero title fit ----------
     Guarantees the offset outline line never overflows the viewport,
     regardless of which font actually renders (webfont or CJK fallback). */
  function fitHeroTitle() {
    var lines = document.querySelectorAll('.hero__line');
    if (!lines.length) return;
    var gutterPx = Math.max(window.innerWidth * 0.04, 20);
    var maxRight = window.innerWidth - gutterPx;
    lines.forEach(function (line) {
      var inner = line.querySelector('.hero__line-inner');
      if (!inner) return;
      inner.style.fontSize = '';
      var lineLeft = line.getBoundingClientRect().left;
      var w = inner.getBoundingClientRect().width;
      var avail = maxRight - lineLeft;
      if (w > avail && w > 0) {
        var fs = parseFloat(getComputedStyle(inner).fontSize);
        inner.style.fontSize = Math.floor(fs * (avail / w) * 100) / 100 + 'px';
      }
    });
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitHeroTitle);
  }
  var fitRaf = null;
  window.addEventListener('resize', function () {
    if (fitRaf) cancelAnimationFrame(fitRaf);
    fitRaf = requestAnimationFrame(fitHeroTitle);
  }, { passive: true });
  document.addEventListener('DOMContentLoaded', fitHeroTitle);

  /* ---------- Live clock (Asia/Shanghai) ---------- */
  function updateClocks() {
    try {
      var fmt = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hour12: false
      });
      var t = fmt.format(new Date());
      var navClock = document.getElementById('navClock');
      var footClock = document.getElementById('footClock');
      if (navClock) navClock.textContent = 'SH ' + t;
      if (footClock) footClock.textContent = 'SHANGHAI ' + t;
    } catch (e) { /* Intl TZ unsupported */ }
  }
  updateClocks();
  setInterval(updateClocks, 15000);

  /* ---------- Nav scrolled state ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('nav--scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile overlay menu ---------- */
  var menuBtn = document.getElementById('menuBtn');
  var overlay = document.getElementById('overlayMenu');
  function closeMenu() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (menuBtn && overlay) {
    menuBtn.addEventListener('click', function () {
      var open = overlay.classList.toggle('is-open');
      overlay.setAttribute('aria-hidden', String(!open));
      menuBtn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    overlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------- Custom cursor ---------- */
  if (finePointer && !reduceMotion) {
    var cursor = document.getElementById('cursor');
    var dot = cursor ? cursor.querySelector('.cursor__dot') : null;
    var ring = cursor ? cursor.querySelector('.cursor__ring') : null;
    if (cursor && dot && ring) {
      document.body.classList.add('no-cursor');
      var mx = -100, my = -100, rx = -100, ry = -100;
      var seen = false;

      window.addEventListener('pointermove', function (e) {
        mx = e.clientX; my = e.clientY;
        if (!seen) { rx = mx; ry = my; seen = true; }
      }, { passive: true });

      window.addEventListener('pointerdown', function () { cursor.classList.add('cursor--press'); });
      window.addEventListener('pointerup', function () { cursor.classList.remove('cursor--press'); });

      document.addEventListener('pointerover', function (e) {
        var t = e.target;
        var interactive = t.closest && t.closest('a, button, .pillar, input, [role="button"]');
        cursor.classList.toggle('cursor--hover', !!interactive);
      });

      (function loop() {
        dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
        requestAnimationFrame(loop);
      })();
    }
  }

  /* ---------- Scroll reveals ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-inview'); });
  }

  /* ---------- Text scramble (nav + brand) ---------- */
  var CHARS = '!<>-_\\/[]{}—=+*^?#________';
  function scramble(el) {
    if (el.__scrambling) return;
    el.__scrambling = true;
    var original = el.dataset.scrambleText || (el.dataset.scrambleText = el.textContent);
    var frame = 0;
    var total = original.length + 8;
    (function step() {
      var out = '';
      for (var i = 0; i < original.length; i++) {
        var revealAt = i * 1.4;
        if (frame >= total - 3 || frame >= revealAt + 6) out += original[i];
        else if (frame >= revealAt) out += CHARS[Math.floor(Math.random() * CHARS.length)];
        else out += original[i] === ' ' ? ' ' : '';
      }
      el.textContent = out;
      frame += 1;
      if (frame < total) {
        requestAnimationFrame(step);
      } else {
        el.textContent = original;
        el.__scrambling = false;
      }
    })();
  }
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('.scramble').forEach(function (el) {
      el.addEventListener('pointerenter', function () { scramble(el); });
    });
  }

  /* ---------- Copy install command ---------- */
  var installBtn = document.getElementById('installCmd');
  if (installBtn) {
    var hint = installBtn.querySelector('.btn__copy-hint');
    installBtn.addEventListener('click', function () {
      var cmd = 'pip install pawnlogic';
      function done() {
        installBtn.classList.add('is-copied');
        if (hint) {
          var prev = hint.textContent;
          var api = window.__i18n;
          var label = api ? (api.dict[api.lang] && api.dict[api.lang]['flagship.copied']) || 'COPIED ✓' : 'COPIED ✓';
          hint.textContent = label;
          setTimeout(function () {
            hint.textContent = prev;
            installBtn.classList.remove('is-copied');
          }, 1600);
        }
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cmd).then(done, done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = cmd; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) { /* ignore */ }
        ta.remove(); done();
      }
    });
  }

  /* ---------- Back to top ---------- */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }
})();

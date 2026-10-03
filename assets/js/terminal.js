/* ============================================================
   terminal.js — PawnLogic terminal simulation
   Time-driven renderer: typing is computed from elapsed time, so
   throttled/occluded tabs catch up cleanly and visible tabs type
   at full speed. Authentic commands from the real CLI.
   ============================================================ */
(function () {
  'use strict';

  var body = document.getElementById('termBody');
  var caret = document.querySelector('.term__caret');
  if (!body) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // [text, cssClass] — one entry per typed segment; '' = blank line
  var SCRIPT = [
    [['$ ', 't-prompt'], ['pip install pawnlogic', 't-cmd']],
    [['  resolved pawnlogic 0.4.1 (python 3.10+) · linux/wsl2', 't-dim']],
    [],
    [['$ ', 't-prompt'], ['pawn', 't-cmd']],
    [['◆ pawnlogic 0.4.1 — session #1 (recoverable)', 't-acid']],
    [],
    [['> ', 't-prompt'], ['/model ds-v4-pro', 't-cmd']],
    [['  model → deepseek/ds-v4-pro · reasoning: high', 't-dim']],
    [],
    [['> ', 't-prompt'], ['run "audit headers of lab target" --scope lab', 't-cmd']],
    [['  routing model → tool context (7 tools)', 't-dim']],
    [['  isolating command in docker sandbox … ', 't-dim'], ['ok', 't-acid']],
    [['  writing persistent memory checkpoint … ', 't-dim'], ['done', 't-acid']],
    [['  evidence appended → ~/.pawnlogic/evidence', 't-acid']]
  ];

  var TYPE_MS = 26;
  var LINE_PAUSE = 260;
  var LOOP_PAUSE = 4600;

  // Flatten the script into a character timeline
  var timeline = [];   // [{ line: i, at: ms, ch: char, cls: class }]
  var lineCharCount = [];
  (function build() {
    var t = 0;
    SCRIPT.forEach(function (line, li) {
      var chars = 0;
      line.forEach(function (part) {
        for (var c = 0; c < part[0].length; c++) {
          timeline.push({ line: li, at: t + chars * TYPE_MS, ch: part[0][c], cls: part[1] });
          chars++;
        }
      });
      lineCharCount[li] = chars;
      t += chars * TYPE_MS + LINE_PAUSE;
    });
  })();
  var TOTAL_TYPE_MS = timeline.length ? timeline[timeline.length - 1].at + LINE_PAUSE : 0;

  function renderInstant() {
    SCRIPT.forEach(function (line) {
      var div = document.createElement('div');
      line.forEach(function (part) {
        var s = document.createElement('span');
        s.className = part[1];
        s.textContent = part[0];
        div.appendChild(s);
      });
      body.appendChild(div);
    });
    if (caret) body.appendChild(caret);
  }

  function makeLineDiv(li) {
    var div = document.createElement('div');
    div.dataset.line = String(li);
    body.appendChild(div);
    return div;
  }

  function renderUpTo(elapsed) {
    // Count how many characters each line should show by now
    var target = {};
    for (var i = 0; i < timeline.length; i++) {
      var ev = timeline[i];
      if (ev.at <= elapsed) target[ev.line] = (target[ev.line] || 0) + 1;
      else break;
    }

    for (var li = 0; li < SCRIPT.length; li++) {
      var want = target[li] || 0;
      var div = body.querySelector('div[data-line="' + li + '"]') || makeLineDiv(li);
      var have = parseInt(div.dataset.shown || '0', 10);
      if (want === have) continue;

      div.innerHTML = '';
      var remaining = want;
      var consumed = 0;
      for (var p = 0; p < SCRIPT[li].length && remaining > 0; p++) {
        var text = SCRIPT[li][p][0];
        var take = Math.min(text.length, remaining);
        var s = document.createElement('span');
        s.className = SCRIPT[li][p][1];
        s.textContent = text.slice(0, take);
        div.appendChild(s);
        remaining -= take;
        consumed += take;
      }
      div.dataset.shown = String(consumed);
    }

    // Keep the caret flowing right after the newest output line
    if (caret) body.appendChild(caret);
  }

  function play() {
    if (reduceMotion || /[?&]qa\b/.test(location.search)) { renderInstant(); return; }
    var cycleStart = performance.now();

    var timer = setInterval(function () {
      var elapsed = performance.now() - cycleStart;
      if (elapsed < TOTAL_TYPE_MS) {
        renderUpTo(elapsed);
      } else {
        renderUpTo(TOTAL_TYPE_MS);
        // Hold the full transcript, then wipe and replay
        if (elapsed > TOTAL_TYPE_MS + LOOP_PAUSE) {
          if (caret && caret.parentNode === body) body.parentNode.appendChild(caret);
          body.innerHTML = '';
          cycleStart = performance.now();
        }
      }
    }, 50);
  }

  // Start only when the terminal is near the viewport
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          io.disconnect();
          setTimeout(play, 500);
        }
      });
    }, { threshold: 0.25 });
    io.observe(body.closest('.flagship__terminal') || body);
  } else {
    play();
  }
})();

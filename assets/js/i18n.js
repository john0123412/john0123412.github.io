/* ============================================================
   i18n — EN / 简体中文 / 繁體中文
   Copy reflects current research focus (Oct 2026):
   PawnLogic autonomous agent · pawnlogic-security · CTF automation
   ============================================================ */
(function () {
  'use strict';

  // QA hook: /?qa disables choreography for deterministic full-page rendering
  if (/[?&]qa\b/.test(location.search)) document.documentElement.classList.add('qa');

  var STRINGS = {
    en: {
      'a11y.skip': 'Skip to content',
      'nav.research': 'Research', 'nav.flagship': 'PawnLogic', 'nav.work': 'Work',
      'nav.stack': 'Stack', 'nav.contact': 'Contact',
      'hero.metaLeft': 'PORTFOLIO — 2026 EDITION',
      'hero.metaRight': 'SHANGHAI, CHINA · UTC+8',
      'hero.statement': 'I build autonomous agents that execute real tools on a real host — and the scope-gated rails that decide what they are allowed to touch.',
      'hero.status': 'OPEN TO RESEARCH COLLABORATION',
      'hero.scroll': 'SCROLL',
      'research.title': 'Research',
      'research.intro': '<p>I\'m Jun Johnny — a CS student who learns systems by building and breaking them. My current work sits where <em>autonomy</em> meets <em>security</em>: terminal-first agents that run real tools on a real host, and the scope-gated rails that decide what they\'re allowed to touch.</p>',
      'research.p1.title': 'Autonomous Agents',
      'research.p1.text': 'PawnLogic is a terminal-first autonomous agent — multi-provider model routing, persistent memory, real local tool execution and MCP — shipped as a versioned PyPI package. One pip install away from a working agent.',
      'research.p2.title': 'Agent Security',
      'research.p2.text': 'pawnlogic-security treats the agent host itself as an attack surface: versioned engagement scopes with explicit hosts, ports and budgets. Nothing runs merely because it is installed — capability is granted, never assumed.',
      'research.p3.title': 'Offensive Security & CTF',
      'research.p3.text': 'Web vulnerability research and CTF practice, distilled into small, auditable tooling — SQLi, XSS, brute-force labs — with a CTF-oriented toolchain wired directly into the agent.',
      'flagship.title': 'PawnLogic',
      'flagship.badge': 'FLAGSHIP — ACTIVE',
      'flagship.lead': 'A terminal-first autonomous AI agent. Multi-provider model routing, persistent memory, real tool execution, MCP integration — published on PyPI, versioned, and CI-tested.',
      'flagship.f1.k': 'Multi-provider routing', 'flagship.f1.v': 'DeepSeek · OpenAI · Anthropic, with per-call reasoning-effort budgets from off to max.',
      'flagship.f2.k': 'Persistent memory', 'flagship.f2.v': 'Recoverable sessions and durable context for long, multi-turn technical work.',
      'flagship.f3.k': 'Sandboxed execution', 'flagship.f3.v': 'Agent-generated commands are isolated in Docker before they ever touch the host.',
      'flagship.f4.k': 'MCP & CTF toolchain', 'flagship.f4.v': 'MCP integration plus opt-in extras — pwntools, ROPgadget, ropper — as installable skill packs.',
      'flagship.cta': 'VIEW ON GITHUB ↗',
      'flagship.copy': 'COPY',
      'flagship.copied': 'COPIED ✓',
      'flagship.m1k': 'RUNTIME', 'flagship.m2k': 'RELEASE', 'flagship.m3k': 'INSTALL',
      'work.title': 'Selected Work',
      'work.r1': 'Scope-gated security tooling for the PawnLogic agent host — engagement scopes, bounded recon, append-only evidence.',
      'work.r2': 'Python toolkit for SQL injection, XSS and brute-force testing against DVWA labs — small, auditable, reproducible.',
      'work.r3': 'An agent that carries mathematical-modeling problems through to a complete, submission-ready paper — fork under active use.',
      'work.r4': 'This site — hand-built, zero dependencies, self-hosted fonts, three languages, strict CSP.',
      'stack.title': 'Stack',
      'stack.c1': 'AGENT SYSTEMS', 'stack.c1i1': 'Multi-model routing', 'stack.c1i2': 'Tool calling',
      'stack.c1i4': 'Persistent memory', 'stack.c1i5': 'Sandboxed workflows', 'stack.c1i6': 'Reasoning budgets',
      'stack.c2': 'SECURITY', 'stack.c2i1': 'Web security', 'stack.c2i3': 'SQLi · XSS · CSRF',
      'stack.c3': 'LANGUAGES',
      'stack.c4': 'RUNTIME & WEB', 'stack.c4i1': 'Linux · WSL2', 'stack.c4i3': 'Git · GitHub Actions',
      'contact.title': 'Contact',
      'contact.kicker': 'Have a hard problem, a CTF to run, or an agent that needs rails?',
      'contact.mail': 'LET\'S TALK',
      'footer.built': 'DESIGNED & BUILT BY HAND — NO TEMPLATES',
      'footer.top': 'BACK TO TOP ↑'
    },

    zh: {
      'a11y.skip': '跳到主要内容',
      'nav.research': '研究', 'nav.flagship': 'PawnLogic', 'nav.work': '项目',
      'nav.stack': '技术栈', 'nav.contact': '联系',
      'hero.metaLeft': '个人主页 — 2026 版',
      'hero.metaRight': '中国 上海 · UTC+8',
      'hero.statement': '我构建能在真实宿主上执行真实工具的自主智能体——以及决定它们能触碰什么的安全边界。',
      'hero.status': '欢迎研究协作',
      'hero.scroll': '向下滚动',
      'research.title': '研究方向',
      'research.intro': '<p>我是 Jun Johnny，一名习惯通过构建与破解来理解系统的计算机专业学生。我目前的工作位于「自主」与「安全」的交叉点：<em>终端优先</em>的 Agent 在真实宿主上运行真实工具，而范围授权的安全轨道决定它们被允许触碰什么。</p>',
      'research.p1.title': '自主智能体',
      'research.p1.text': 'PawnLogic 是一个终端优先的自主 Agent——多供应商模型路由、持久化记忆、真实本地工具执行与 MCP 集成，以版本化的 PyPI 包发布。一条 pip install 命令，即可获得一个可用的智能体。',
      'research.p2.title': '智能体安全',
      'research.p2.text': 'pawnlogic-security 把 Agent 宿主本身视为攻击面：版本化的 Engagement Scope，精确到主机、端口与预算。「被安装」不等于「被授权」——能力只能被显式授予，绝不被默认假设。',
      'research.p3.title': '攻防安全与 CTF',
      'research.p3.text': '把 Web 漏洞研究与 CTF 训练沉淀为小而可审计的工具——SQL 注入、XSS、暴力破解实验——并将 CTF 工具链直接接入智能体。',
      'flagship.title': 'PawnLogic',
      'flagship.badge': '主力项目 — 活跃开发',
      'flagship.lead': '一个终端优先的自主 AI Agent。多供应商模型路由、持久化记忆、真实工具执行、MCP 集成——已发布至 PyPI，版本化、CI 测试。',
      'flagship.f1.k': '多供应商路由', 'flagship.f1.v': 'DeepSeek · OpenAI · Anthropic，每次调用可设置从 off 到 max 的推理预算。',
      'flagship.f2.k': '持久化记忆', 'flagship.f2.v': '可恢复的会话与持久上下文，支撑长时间的多轮技术工作。',
      'flagship.f3.k': '沙箱执行', 'flagship.f3.v': 'Agent 生成的命令先在 Docker 中隔离，再触碰宿主。',
      'flagship.f4.k': 'MCP 与 CTF 工具链', 'flagship.f4.v': 'MCP 集成，外加可选扩展——pwntools、ROPgadget、ropper——以技能包形式安装。',
      'flagship.cta': '在 GitHub 查看 ↗',
      'flagship.copy': '复制',
      'flagship.copied': '已复制 ✓',
      'flagship.m1k': '运行环境', 'flagship.m2k': '版本', 'flagship.m3k': '安装',
      'work.title': '精选项目',
      'work.r1': '为 PawnLogic Agent 宿主打造的范围授权安全工具——Engagement Scope、有界侦察、只追加证据记录。',
      'work.r2': '面向 DVWA 实验环境的 Python 工具集：SQL 注入、XSS 与暴力破解测试——小而可审计、可复现。',
      'work.r3': '将数学建模问题一路推进到完整可提交论文的智能体——持续使用中的 fork。',
      'work.r4': '本站——纯手工构建、零依赖、自托管字体、三语切换、严格 CSP。',
      'stack.title': '技术栈',
      'stack.c1': '智能体系统', 'stack.c1i1': '多模型路由', 'stack.c1i2': '工具调用',
      'stack.c1i4': '持久化记忆', 'stack.c1i5': '沙箱化工作流', 'stack.c1i6': '推理预算',
      'stack.c2': '安全', 'stack.c2i1': 'Web 安全', 'stack.c2i3': 'SQL 注入 · XSS · CSRF',
      'stack.c3': '编程语言',
      'stack.c4': '运行时与 Web', 'stack.c4i1': 'Linux · WSL2', 'stack.c4i3': 'Git · GitHub Actions',
      'contact.title': '联系',
      'contact.kicker': '有难题要解、CTF 要打，或有需要安全轨道的 Agent？',
      'contact.mail': '聊聊吧',
      'footer.built': '纯手工设计与构建 — 没有模板',
      'footer.top': '回到顶部 ↑'
    },

    zhtw: {
      'a11y.skip': '跳至主要內容',
      'nav.research': '研究', 'nav.flagship': 'PawnLogic', 'nav.work': '專案',
      'nav.stack': '技術棧', 'nav.contact': '聯絡',
      'hero.metaLeft': '個人主頁 — 2026 版',
      'hero.metaRight': '中國 上海 · UTC+8',
      'hero.statement': '我構建能在真實宿主上執行真實工具的自主智慧代理——以及決定它們能觸碰什麼的安全邊界。',
      'hero.status': '歡迎研究協作',
      'hero.scroll': '向下捲動',
      'research.title': '研究方向',
      'research.intro': '<p>我是 Jun Johnny，一名習慣透過建構與破解來理解系統的資訊工程學生。我目前的工作位於「自主」與「安全」的交叉點：<em>終端機優先</em>的 Agent 在真實宿主上執行真實工具，而範圍授權的安全軌道決定它們被允許觸碰什麼。</p>',
      'research.p1.title': '自主智慧代理',
      'research.p1.text': 'PawnLogic 是一個終端機優先的自主 Agent——多供應商模型路由、持久化記憶、真實本地工具執行與 MCP 整合，以版本化的 PyPI 套件發佈。一條 pip install 指令，即可取得一個可用的智慧代理。',
      'research.p2.title': '代理安全',
      'research.p2.text': 'pawnlogic-security 把 Agent 宿主本身視為攻擊面：版本化的 Engagement Scope，精確到主機、連接埠與預算。「被安裝」不等於「被授權」——能力只能被明確授予，絕不被預設假設。',
      'research.p3.title': '攻防安全與 CTF',
      'research.p3.text': '把 Web 漏洞研究與 CTF 訓練沉澱為小而可審計的工具——SQL 注入、XSS、暴力破解實驗——並將 CTF 工具鏈直接接入智慧代理。',
      'flagship.title': 'PawnLogic',
      'flagship.badge': '主力專案 — 活躍開發',
      'flagship.lead': '一個終端機優先的自主 AI Agent。多供應商模型路由、持久化記憶、真實工具執行、MCP 整合——已發佈至 PyPI，版本化、CI 測試。',
      'flagship.f1.k': '多供應商路由', 'flagship.f1.v': 'DeepSeek · OpenAI · Anthropic，每次呼叫可設定從 off 到 max 的推理預算。',
      'flagship.f2.k': '持久化記憶', 'flagship.f2.v': '可復原的工作階段與持久上下文，支撐長時間的多輪技術工作。',
      'flagship.f3.k': '沙箱執行', 'flagship.f3.v': 'Agent 產生的指令先在 Docker 中隔離，再觸碰宿主。',
      'flagship.f4.k': 'MCP 與 CTF 工具鏈', 'flagship.f4.v': 'MCP 整合，外加可選擴充——pwntools、ROPgadget、ropper——以技能包形式安裝。',
      'flagship.cta': '在 GitHub 查看 ↗',
      'flagship.copy': '複製',
      'flagship.copied': '已複製 ✓',
      'flagship.m1k': '執行環境', 'flagship.m2k': '版本', 'flagship.m3k': '安裝',
      'work.title': '精選專案',
      'work.r1': '為 PawnLogic Agent 宿主打造的範圍授權安全工具——Engagement Scope、有界偵察、僅附加證據記錄。',
      'work.r2': '面向 DVWA 實驗環境的 Python 工具集：SQL 注入、XSS 與暴力破解測試——小而可審計、可重現。',
      'work.r3': '將數學建模問題一路推進到完整可提交論文的智慧代理——持續使用中的 fork。',
      'work.r4': '本站——純手工建構、零依賴、自託管字型、三語切換、嚴格 CSP。',
      'stack.title': '技術棧',
      'stack.c1': '智慧代理系統', 'stack.c1i1': '多模型路由', 'stack.c1i2': '工具呼叫',
      'stack.c1i4': '持久化記憶', 'stack.c1i5': '沙箱化工作流', 'stack.c1i6': '推理預算',
      'stack.c2': '安全', 'stack.c2i1': 'Web 安全', 'stack.c2i3': 'SQL 注入 · XSS · CSRF',
      'stack.c3': '程式語言',
      'stack.c4': '執行環境與 Web', 'stack.c4i1': 'Linux · WSL2', 'stack.c4i3': 'Git · GitHub Actions',
      'contact.title': '聯絡',
      'contact.kicker': '有難題要解、CTF 要打，或有需要安全軌道的 Agent？',
      'contact.mail': '聊聊吧',
      'footer.built': '純手工設計與建構 — 沒有範本',
      'footer.top': '回到頂部 ↑'
    }
  };

  var SUPPORTED = ['en', 'zh', 'zhtw'];

  function currentLang() {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) { /* storage unavailable */ }
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || 'en').toLowerCase();
    if (nav.indexOf('zh') === 0) {
      return (nav.indexOf('tw') !== -1 || nav.indexOf('hk') !== -1 || nav.indexOf('hant') !== -1) ? 'zhtw' : 'zh';
    }
    return 'en';
  }

  function setLang(l) {
    if (SUPPORTED.indexOf(l) === -1) return;
    try { localStorage.setItem('lang', l); } catch (e) { /* ignore */ }
    applyLang(l);
  }

  function applyLang(l) {
    var dict = STRINGS[l] || STRINGS.en;
    window.__i18n.lang = l;
    document.documentElement.setAttribute('lang', l === 'en' ? 'en' : (l === 'zh' ? 'zh-CN' : 'zh-Hant'));
    var nodes = document.querySelectorAll('[data-i18n], [data-i18n-html]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
      var val = dict[key];
      if (val == null) continue;
      if (el.hasAttribute('data-i18n-html')) { el.innerHTML = val; }
      else { el.textContent = val; }
    }
    // Contact big CTA is split into spans — translate the text span only
    var mailText = document.querySelector('.contact__mail-text');
    if (mailText && dict['contact.mail']) mailText.textContent = dict['contact.mail'];

    var btns = document.querySelectorAll('.lang-switch__btn');
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle('is-active', btns[j].getAttribute('data-lang') === l);
    }
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
  }

  window.__i18n = { applyLang: applyLang, setLang: setLang, currentLang: currentLang, dict: STRINGS, lang: 'en' };

  // Bind language buttons once DOM is parsed (script is deferred)
  document.addEventListener('DOMContentLoaded', function () {
    var btns = document.querySelectorAll('.lang-switch__btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () { setLang(this.getAttribute('data-lang')); });
    }
    applyLang(currentLang());
  });
})();

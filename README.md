# Jun Johnny — Portfolio 2026

**[简体中文](#简体中文)**

Personal site of **Jun Johnny** — rewritten around the current research focus:

> **Autonomous agents** (PawnLogic) · **Agent security** (pawnlogic-security) · **Offensive security & CTF automation**

🌐 Live target: [junjohnny.me](https://junjohnny.me)

---

## Design

- **Concept** — "PHOSPHOR": terminal-noir research journal. One acid accent (`#D6FF4B`) on near-black, log-style mono microcopy, oversized Syne display type.
- **Type** — Syne 700/800 (display) · Space Grotesk 300–700 (body) · JetBrains Mono 400/500/700 (log/code). All self-hosted woff2 (latin subset, ~190 KB total), CSP-safe.
- **Sections** — Boot preloader → interactive "agent network" hero → marquee → Research (3 directions) → PawnLogic flagship with live terminal simulation → Selected work → Stack → Contact.
- **Motion** — preloader boot log, staggered line reveals, scroll-triggered section reveals, text scramble on nav hover, magnetic-feel hover fills, film grain, custom cursor (fine pointers only). All disabled under `prefers-reduced-motion`.

## Engineering

| Aspect | Choice |
|---|---|
| Stack | Zero dependencies — hand-written HTML / CSS / JS, no build step |
| i18n | EN / 简体中文 / 繁體中文 via `data-i18n` dictionary (`assets/js/i18n.js`), persisted in `localStorage`, auto-detected from `navigator.language` |
| Fonts | Self-hosted, `font-display: swap`, preloaded display font |
| Resilience | Preloader uses time-based rendering + 4 s failsafe (never traps the page); terminal renderer catches up cleanly in throttled tabs; hero title auto-fits any font fallback |
| CSP | Strict `default-src 'self'` policy in `vercel.json` — the only external hosts allowed are the GoatCounter analytics endpoints |
| A11y | Semantic landmarks, skip link, focus-visible styles, aria labels, reduced-motion support |
| QA hook | Append `?qa` to the URL to disable choreography for deterministic full-page rendering |

## Run

```bash
# any static server, e.g.
python -m http.server 8420
# → http://localhost:8420
```

## Deploy

Two pipelines run from this repo on every push to `main`:

```
GitHub (main) ──▶ Vercel CI/CD ───────────▶ junjohnny.me (Edge + Let's Encrypt)
              └─▶ GitHub Actions (static) ─▶ john0123412.github.io (CNAME: junjohnny.me)
```

`vercel.json` serves the security headers (strict CSP, X-Frame-Options DENY, etc.). The GitHub Actions workflow uploads the static site directly — no build step.

## Structure

```
index.html              markup · SEO/OG meta · JSON-LD
vercel.json             security headers (strict CSP)
CNAME                   GitHub Pages custom domain (junjohnny.me)
.github/workflows/      static GitHub Pages deploy
assets/
  css/style.css         design tokens, layout, motion, i18n & reduced-motion overrides
  js/i18n.js            EN/zh/zhtw dictionary + language switching
  js/main.js            preloader, clock, nav, cursor, reveals, scramble, copy cmd, hero fit
  js/hero-canvas.js     interactive agent-network canvas
  js/terminal.js        time-driven PawnLogic terminal simulation
  fonts/*.woff2         Syne · Space Grotesk · JetBrains Mono (latin)
  favicon.svg
```

---

<a id="简体中文"></a>
## 简体中文

**Jun Johnny 的个人主页**，围绕当前最新研究方向重写：

> **自主智能体**（PawnLogic）· **智能体安全**（pawnlogic-security）· **攻防安全与 CTF 自动化**

### 设计

- **概念** —— 「PHOSPHOR」：终端暗色研究手札。近黑底色 + 单一酸绿强调色（`#D6FF4B`），日志式等宽微文案，超大号 Syne 展示字体。
- **字体** —— Syne（展示）· Space Grotesk（正文）· JetBrains Mono（日志/代码），全部自托管 woff2（拉丁子集，共约 190 KB），兼容严格 CSP。
- **区块** —— 开机预加载 → 可交互「Agent 网络」首屏 → 跑马灯 → 研究方向（3 个）→ PawnLogic 旗舰区（实时终端模拟）→ 精选项目 → 技术栈 → 联系。

### 工程

- **零依赖**：纯手写 HTML / CSS / JS，无需构建。
- **三语**：EN / 简体中文 / 繁體中文，`localStorage` 持久化，自动跟随浏览器语言。
- **健壮性**：预加载基于时间线渲染 + 4 秒兜底；终端在节流标签页中可追帧；标题在任何字体回退下自动收窄不裁切。
- **CSP**：与 `vercel.json` 的 `default-src 'self'` 严格策略完全兼容——无内联脚本、无第三方请求。
- **QA 钩子**：URL 加 `?qa` 可跳过编排动画，用于确定性整页截图。

### 本地预览

```bash
python -m http.server 8420
# → http://localhost:8420
```

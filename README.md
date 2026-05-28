# 🧑‍💻 jun johnny · portfolio

[![Live](https://img.shields.io/badge/Live-junjohnny.me-blue?style=flat-square&logo=vercel)](https://junjohnny.me)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![Cloudflare](https://img.shields.io/badge/DNS-Cloudflare-f38020?style=flat-square&logo=cloudflare)](https://cloudflare.com)

**[简体中文](README_CN.md)**

> Personal portfolio of **Jun Johnny** — CS student & security researcher specializing in AI Agent architecture, penetration testing (Kali Linux), and web security engineering.

🌐 **[junjohnny.me](https://junjohnny.me)**

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | Vue 3 + Vite |
| Styling | CSS custom properties |
| i18n | Custom composable — EN / 简体中文 / 繁體中文 |
| Deployment | Vercel (CI/CD on `main` push) |
| DNS | Cloudflare (DNS Only — CNAME → Vercel) |
| CDN / SSL | Vercel Edge Network + Automated Let's Encrypt |
| Domain | [junjohnny.me](https://junjohnny.me) |

---

## Skills

| Category | Tools |
|---|---|
| Languages & Core | C/C++ (OOP), Python, JavaScript, Shell Scripting |
| Penetration & Security | Kali Linux, Nmap, Metasploit, SQLi, XSS, CSRF, Web Security Labs |
| AI Agent System | OpenAI-compatible API, Tool Calling, MCP, Local Sandboxed Workflows |
| Frontend & Dev Env | Vue 3, Vite, TailwindCSS, Linux (WSL), Docker, Git, GitHub Actions |

---

## Featured Project

### PawnLogic &nbsp; `🛠️ Active Development`

> A terminal-based AI agent framework engineered for autonomous task execution and sandboxed security workflows.

- **Docker Sandboxing** — Dynamic environment isolation to securely execute agent-generated commands.
- **Context & Memory** — Local persistent storage for complex, multi-turn technical workflows.
- **Tool-Use & Automation** — Custom tool schemas for automated file manipulation and network tasks.

`Python` `LLM Tool-Calling` `Docker API` `Linux` `Security`

🔗 [github.com/john0123412/PawnLogic](https://github.com/john0123412/PawnLogic)

---

## Security

All security headers are served via Vercel response headers (`vercel.json`), not meta tags.

| Header | Value |
|---|---|
| `Content-Security-Policy` | `default-src 'self'` — no external resources |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | camera, mic, geolocation disabled |

No backend, no forms, no user input. No third-party scripts or tracking.

---

## Deployment

```
GitHub (main) ──push──▶ Vercel CI/CD ──build──▶ Global Edge Network
                                                       │
                                          Cloudflare DNS (DNS Only)
                                          CNAME → Vercel
                                          SSL: Let's Encrypt (auto)
```

Every push to `main` triggers `npm run build` on Vercel and deploys to the edge automatically. Cloudflare handles DNS resolution only (grey cloud, no proxy) — all CDN, traffic routing, and SSL are handled entirely by Vercel.

---

## Local Development

```bash
npm install
npm run dev      # → http://localhost:5173/
npm run build    # production build → dist/
npm run preview  # preview build → http://localhost:4173/
```

**WSL — expose to local network:**

```bash
npx vite --host
```

```powershell
# Windows PowerShell (Admin) — port forward WSL → LAN
netsh interface portproxy add v4tov4 listenport=5173 listenaddress=0.0.0.0 connectport=5173 connectaddress=<WSL_IP>
netsh advfirewall firewall add rule name="Vite Dev Server" dir=in action=allow protocol=TCP localport=5173

# Cleanup
netsh interface portproxy delete v4tov4 listenport=5173 listenaddress=0.0.0.0
netsh advfirewall firewall delete rule name="Vite Dev Server"
```

---

## Docs

| File | Description |
|---|---|
| `README.md` | This page (English) |
| `README_CN.md` | 简体中文版 |

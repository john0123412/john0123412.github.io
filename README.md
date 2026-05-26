# 🧑‍💻 jun johnny · portfolio

[![Live](https://img.shields.io/badge/Live-junjohnny.me-blue?style=flat-square&logo=vercel)](https://junjohnny.me)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![Cloudflare](https://img.shields.io/badge/CDN-Cloudflare-f38020?style=flat-square&logo=cloudflare)](https://cloudflare.com)

**[简体中文](README_CN.md)**

> Personal portfolio of **Jun Johnny** — CS student & security researcher specializing in AI Agent architecture, penetration testing (Kali Linux), and web security engineering.

🌐 **[junjohnny.me](https://junjohnny.me)**

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | Vue 3 + Vite |
| Styling | CSS custom properties |
| i18n | Custom composable (EN / 简体 / 繁體) |
| Deployment | Vercel |
| CDN / DNS | Cloudflare |
| Domain | [junjohnny.me](https://junjohnny.me) |

---

## Quick Start

```bash
npm install
npm run dev      # dev server → http://localhost:5173/
npm run build    # production build → dist/
npm run preview  # preview dist/ → http://localhost:4173/
```

---

## Deployment

Push to `main` → Vercel auto-builds and deploys.  
Cloudflare proxies `junjohnny.me` → Vercel edge network.

---

## Security

- No backend, no forms, no user input
- `X-Frame-Options: DENY` via Vercel response headers
- No third-party scripts or tracking

---

## Local Network Access (WSL)

```bash
npx vite --host
```

If on WSL, forward the port from Windows PowerShell (Admin):

```powershell
# Forward WSL port to Windows
netsh interface portproxy add v4tov4 listenport=5173 listenaddress=0.0.0.0 connectport=5173 connectaddress=<WSL_IP>
netsh advfirewall firewall add rule name="Vite Dev Server" dir=in action=allow protocol=TCP localport=5173

# Cleanup when done
netsh interface portproxy delete v4tov4 listenport=5173 listenaddress=0.0.0.0
netsh advfirewall firewall delete rule name="Vite Dev Server"
```

---

## Documentation

| Document | Description |
|---|---|
| **README.md** | This page (English) |
| **README_CN.md** | 简体中文版 |

# 🧑‍💻 jun johnny · portfolio

[![Live](https://img.shields.io/badge/Live-junjohnny.me-blue?style=flat-square&logo=vercel)](https://junjohnny.me)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![Cloudflare](https://img.shields.io/badge/CDN-Cloudflare-f38020?style=flat-square&logo=cloudflare)](https://cloudflare.com)

**[English](README.md)**

> **Jun Johnny** 的个人作品集 —— CS 学生 & 安全研究员，专注于 AI Agent 架构、渗透测试（Kali Linux）和 Web 安全工程。

🌐 **[junjohnny.me](https://junjohnny.me)**

---

## 技术栈

| 层级 | 技术 |
|---|---|
| 前端 | Vue 3 + Vite |
| 样式 | CSS 自定义变量 |
| 国际化 | 自定义 composable（EN / 简体 / 繁體） |
| 部署 | Vercel |
| CDN / DNS | Cloudflare |
| 域名 | [junjohnny.me](https://junjohnny.me) |

---

## 快速开始

```bash
npm install
npm run dev      # 开发服务器 → http://localhost:5173/
npm run build    # 生产构建 → dist/
npm run preview  # 预览 dist/ → http://localhost:4173/
```

---

## 部署流程

推送到 `main` 分支 → Vercel 自动构建并部署。  
Cloudflare 代理 `junjohnny.me` → Vercel 边缘网络。

---

## 安全

- 无后端、无表单、无用户输入
- 通过 Vercel 响应头注入 `X-Frame-Options: DENY`
- 无任何第三方脚本或追踪

---

## 局域网访问（WSL 用户）

```bash
npx vite --host
```

WSL 环境下需在 Windows PowerShell（管理员）中设置端口转发：

```powershell
# 转发 WSL 端口到 Windows
netsh interface portproxy add v4tov4 listenport=5173 listenaddress=0.0.0.0 connectport=5173 connectaddress=<WSL_IP>
netsh advfirewall firewall add rule name="Vite Dev Server" dir=in action=allow protocol=TCP localport=5173

# 完成后清理
netsh interface portproxy delete v4tov4 listenport=5173 listenaddress=0.0.0.0
netsh advfirewall firewall delete rule name="Vite Dev Server"
```

---

## 文档

| 文档 | 说明 |
|---|---|
| **README.md** | 英文版 |
| **README_CN.md** | 本页（简体中文） |

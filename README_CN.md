# 🧑‍💻 jun johnny · portfolio

[![Live](https://img.shields.io/badge/Live-junjohnny.me-blue?style=flat-square&logo=vercel)](https://junjohnny.me)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
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
| 国际化 | 自定义 composable — EN / 简体中文 / 繁體中文 |
| 部署 | Vercel（`main` 分支推送即触发） |
| CDN / DNS | Cloudflare（CNAME 扁平化 + 仅 DNS 代理） |
| SSL | Vercel 自动申请 Let's Encrypt |
| 域名 | [junjohnny.me](https://junjohnny.me) |

---

## 技能

| 类别 | 工具 |
|---|---|
| 编程语言 | C/C++ (OOP)、Python、JavaScript、Shell 脚本 |
| 渗透与安全 | Kali Linux、Nmap、Metasploit、SQLi、XSS、CSRF、Web 安全实验室 |
| AI Agent 系统 | OpenAI 兼容 API、工具调用、MCP 协议、本地沙箱工作流 |
| 前端与开发环境 | Vue 3、Vite、TailwindCSS、Linux (WSL)、Docker、Git、GitHub Actions |

---

## 重点项目

### PawnLogic &nbsp; `🛠️ 开发中`

> 一个基于终端的 AI Agent 框架，专为自主任务执行和沙箱安全工作流而构建。

- **Docker 沙箱隔离** — 动态环境隔离，安全执行 Agent 生成的命令。
- **上下文与记忆管理** — 本地持久化存储，支持复杂的多轮技术工作流。
- **工具调用与自动化** — 自定义工具 Schema，实现文件操作和网络任务的自动化。

`Python` `LLM Tool-Calling` `Docker API` `Linux` `Security`

🔗 [github.com/john0123412/PawnLogic](https://github.com/john0123412/PawnLogic)

---

## 部署架构

```
GitHub (main) ──push──▶ Vercel CI/CD ──build──▶ 全球边缘网络
                                                       │
                                          Cloudflare DNS（仅 DNS 模式）
                                          CNAME 扁平化 → Vercel
                                          SSL: Let's Encrypt（自动）
```

每次推送到 `main` 分支，Vercel 自动执行 `npm run build` 并部署至边缘节点。Cloudflare 设置为**仅 DNS**（灰色云朵），由 Vercel 全权处理 SSL 的申请与续签，避免 TLS 握手冲突。

---

## 本地开发

```bash
npm install
npm run dev      # → http://localhost:5173/
npm run build    # 生产构建 → dist/
npm run preview  # 预览构建 → http://localhost:4173/
```

**WSL — 暴露至局域网：**

```bash
npx vite --host
```

```powershell
# Windows PowerShell（管理员）— 端口转发 WSL → 局域网
netsh interface portproxy add v4tov4 listenport=5173 listenaddress=0.0.0.0 connectport=5173 connectaddress=<WSL_IP>
netsh advfirewall firewall add rule name="Vite Dev Server" dir=in action=allow protocol=TCP localport=5173

# 清理
netsh interface portproxy delete v4tov4 listenport=5173 listenaddress=0.0.0.0
netsh advfirewall firewall delete rule name="Vite Dev Server"
```

---

## 文档

| 文件 | 说明 |
|---|---|
| `README.md` | 英文版 |
| `README_CN.md` | 本页（简体中文） |

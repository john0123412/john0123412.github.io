# jun johnny · portfolio

**[English](README_EN.md)** | **[简体中文](README_CN.md)**

🌐 **在线预览：** [junjohnny.me](https://junjohnny.me)

---

**Jun Johnny** 的个人作品集 —— CS 学生 & 安全研究员。  
使用 Vue 3 + Vite 构建，部署于 Vercel，通过 Cloudflare 加速。

## 技术栈

| 层级 | 技术 |
|---|---|
| 前端 | Vue 3 + Vite |
| 样式 | CSS 自定义变量 |
| 国际化 | 自定义 composable（EN / 简体 / 繁體） |
| 部署 | Vercel |
| CDN / DNS | Cloudflare |
| 域名 | [junjohnny.me](https://junjohnny.me) |

## 本地开发

```bash
npm install
npm run dev      # 开发服务器 → http://localhost:5173/
npm run build    # 生产构建 → dist/
npm run preview  # 预览 dist/ → http://localhost:4173/
```

## 部署流程

推送到 `main` 分支 → Vercel 自动构建并部署。  
Cloudflare 代理 `junjohnny.me` → Vercel 边缘网络。

## 安全

- 无后端、无表单、无用户输入
- 通过 Vercel 响应头注入 `X-Frame-Options: DENY`
- 无任何第三方脚本或追踪

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

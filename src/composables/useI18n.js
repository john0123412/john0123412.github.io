import { ref } from 'vue'

export const lang = ref(localStorage.getItem('lang') || 'en')

export function setLang(l) {
  lang.value = l
  localStorage.setItem('lang', l)
}

const t = {
  en: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', links: 'Links' },
    hero: {
      subtitle: 'I focus on AI Agent automation, penetration testing (Kali Linux), web security labs, and building practical full-stack tools.',
      viewProjects: 'View Projects',
    },
    about: {
      title: 'About Me',
      p1: 'I\'m a Computer Science student driven by <strong>systems programming</strong>, <strong>automation</strong>, and <strong>offensive security</strong>. Instead of just studying theory, I prefer building and breaking systems to understand their underlying mechanics.',
      p2: 'My primary engineering focus right now is <strong>PawnLogic</strong>, a terminal-based AI agent framework designed to explore multi-model routing, sandbox isolation via Docker, and persistent memory. When I\'m not developing automation tools, I\'m diving into penetration testing workflows within Kali Linux environments, conducting web vulnerability research, and refining automated script execution.',
    },
    skills: {
      title: 'Skills',
      categories: [
        { name: 'Languages & Core', items: ['C/C++ (OOP)', 'Python', 'JavaScript', 'Shell Scripting'] },
        { name: 'Penetration & Security', items: ['Kali Linux', 'Nmap', 'Metasploit', 'SQLi', 'XSS', 'CSRF', 'Web Security Labs'] },
        { name: 'AI Agent System', items: ['OpenAI-compatible API', 'Tool Calling', 'MCP', 'Local Sandboxed Workflows'] },
        { name: 'Frontend & Dev Env', items: ['Vue 3', 'Vite', 'TailwindCSS', 'Linux (WSL)', 'Docker', 'Git', 'GitHub Actions'] },
      ],
    },
    projects: {
      title: 'Projects',
      status: '🛠️ Active Development',
      desc: 'A terminal-based AI agent framework engineered for autonomous task execution and sandboxed security workflows.',
      h1: { label: 'Docker Sandboxing', text: 'Dynamic environment isolation to securely execute agent-generated commands.' },
      h2: { label: 'Context & Memory', text: 'Local persistent storage for complex, multi-turn technical workflows.' },
      h3: { label: 'Tool-Use & Automation', text: 'Custom schemas for automated file manipulation and network tasks.' },
    },
    links: { title: 'Contact & Links' },
    footer: 'Built with Vue 3 + Vite · Hosted on GitHub Pages',
  },
  zh: {
    nav: { about: '关于', skills: '技能', projects: '项目', links: '联系' },
    hero: {
      subtitle: '专注于 AI Agent 自动化、渗透测试（Kali Linux）、Web 安全实验室，以及构建实用的全栈工具。',
      viewProjects: '查看项目',
    },
    about: {
      title: '关于我',
      p1: '我是一名计算机科学专业的学生，对<strong>系统编程</strong>、<strong>自动化</strong>和<strong>攻防安全</strong>充满热情。我更倾向于通过构建和破解系统来深入理解其底层运行机制，而不仅仅是研读理论。',
      p2: '目前我的核心工程方向是 <strong>PawnLogic</strong>——一个基于终端的 AI Agent 框架，旨在探索多模型路由、Docker 沙箱隔离与持久化记忆。在开发自动化工具之余，我也深入研究 Kali Linux 环境下的渗透测试流程、Web 漏洞研究，以及自动化脚本执行的优化。',
    },
    skills: {
      title: '技能',
      categories: [
        { name: '编程语言', items: ['C/C++ (面向对象)', 'Python', 'JavaScript', 'Shell 脚本'] },
        { name: '渗透与安全', items: ['Kali Linux', 'Nmap', 'Metasploit', 'SQL 注入', 'XSS', 'CSRF', 'Web 安全实验室'] },
        { name: 'AI Agent 系统', items: ['OpenAI 兼容 API', '工具调用', 'MCP 协议', '本地沙箱工作流'] },
        { name: '前端与开发环境', items: ['Vue 3', 'Vite', 'TailwindCSS', 'Linux (WSL)', 'Docker', 'Git', 'GitHub Actions'] },
      ],
    },
    projects: {
      title: '项目',
      status: '🛠️ 开发中',
      desc: '一个基于终端的 AI Agent 框架，专为自主任务执行和沙箱安全工作流而设计。',
      h1: { label: 'Docker 沙箱隔离', text: '动态环境隔离，安全执行 Agent 生成的命令。' },
      h2: { label: '上下文与记忆', text: '本地持久化存储，支持复杂的多轮技术工作流。' },
      h3: { label: '工具调用与自动化', text: '自定义 Schema，实现文件操作和网络任务的自动化。' },
    },
    links: { title: '联系方式' },
    footer: '使用 Vue 3 + Vite 构建 · 部署于 GitHub Pages',
  },
  zhtw: {
    nav: { about: '關於', skills: '技能', projects: '專案', links: '聯絡' },
    hero: {
      subtitle: '專注於 AI Agent 自動化、滲透測試（Kali Linux）、Web 安全實驗室，以及建構實用的全端工具。',
      viewProjects: '查看專案',
    },
    about: {
      title: '關於我',
      p1: '我是一名資訊科學系的學生，對<strong>系統程式設計</strong>、<strong>自動化</strong>和<strong>攻防安全</strong>充滿熱情。我更傾向於透過建構和破解系統來深入理解其底層運作機制，而非僅僅研讀理論。',
      p2: '目前我的核心工程方向是 <strong>PawnLogic</strong>——一個基於終端機的 AI Agent 框架，旨在探索多模型路由、Docker 沙箱隔離與持久化記憶。在開發自動化工具之餘，我也深入研究 Kali Linux 環境下的滲透測試流程、Web 漏洞研究，以及自動化腳本執行的優化。',
    },
    skills: {
      title: '技能',
      categories: [
        { name: '程式語言', items: ['C/C++ (物件導向)', 'Python', 'JavaScript', 'Shell 腳本'] },
        { name: '滲透與安全', items: ['Kali Linux', 'Nmap', 'Metasploit', 'SQL 注入', 'XSS', 'CSRF', 'Web 安全實驗室'] },
        { name: 'AI Agent 系統', items: ['OpenAI 相容 API', '工具呼叫', 'MCP 協議', '本地沙箱工作流'] },
        { name: '前端與開發環境', items: ['Vue 3', 'Vite', 'TailwindCSS', 'Linux (WSL)', 'Docker', 'Git', 'GitHub Actions'] },
      ],
    },
    projects: {
      title: '專案',
      status: '🛠️ 開發中',
      desc: '一個基於終端機的 AI Agent 框架，專為自主任務執行和沙箱安全工作流而設計。',
      h1: { label: 'Docker 沙箱隔離', text: '動態環境隔離，安全執行 Agent 產生的指令。' },
      h2: { label: '上下文與記憶', text: '本地持久化儲存，支援複雜的多輪技術工作流。' },
      h3: { label: '工具呼叫與自動化', text: '自訂 Schema，實現檔案操作和網路任務的自動化。' },
    },
    links: { title: '聯絡方式' },
    footer: '使用 Vue 3 + Vite 建構 · 部署於 GitHub Pages',
  },
}

export function useI18n() {
  return { lang, t, setLang }
}

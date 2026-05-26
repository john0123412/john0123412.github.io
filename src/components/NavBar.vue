<template>
  <nav class="nav">
    <div class="nav-brand">Jun Johnny</div>
    <div class="nav-right">
      <ul class="nav-links">
        <li><a href="#about">{{ tr.nav.about }}</a></li>
        <li><a href="#skills">{{ tr.nav.skills }}</a></li>
        <li><a href="#projects">{{ tr.nav.projects }}</a></li>
        <li><a href="#links">{{ tr.nav.links }}</a></li>
      </ul>
      <div class="lang-wrapper">
        <select class="lang-select" :value="lang" @change="e => setLang(e.target.value)" aria-label="Language">
          <option value="en">EN</option>
          <option value="zh">简体</option>
          <option value="zhtw">繁體</option>
        </select>
      </div>
      <button class="theme-btn" @click="cycleTheme" :title="'Theme: ' + theme">
        {{ themeIcon }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'

const { lang, t, setLang } = useI18n()
const tr = computed(() => t[lang.value])

const theme = ref('default')
const themeIcon = ref('💻')

const icons = { default: '💻', light: '☀️', dark: '🌙' }

function applyTheme(t) {
  theme.value = t
  themeIcon.value = icons[t]
  if (t === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else if (t === 'light') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }
  localStorage.setItem('theme', t)
}

function cycleTheme() {
  const order = ['default', 'light', 'dark']
  const next = order[(order.indexOf(theme.value) + 1) % 3]
  applyTheme(next)
}

onMounted(() => {
  const saved = localStorage.getItem('theme') || 'default'
  applyTheme(saved)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (theme.value === 'default') applyTheme('default')
  })
})
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border);
  z-index: 100;
}
.nav-brand {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--primary);
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: var(--primary);
}
.lang-select {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.4rem 0.5rem;
  font-size: 0.85rem;
  color: var(--text);
  cursor: pointer;
  transition: border-color 0.2s;
  appearance: none;
  -webkit-appearance: none;
  text-align: center;
}
.lang-select:hover, .lang-select:focus {
  border-color: var(--primary);
  outline: none;
}
.theme-btn {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
}
.theme-btn:hover {
  transform: scale(1.1);
  border-color: var(--primary);
}

@media (max-width: 600px) {
  .nav { padding: 0.8rem 1rem; }
  .nav-links { gap: 0.8rem; }
  .nav-links a { font-size: 0.8rem; }
}

@media (max-width: 380px) {
  .nav-links { display: none; }
}
</style>

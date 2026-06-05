<template>
  <nav class="nav" :class="{ 'menu-open': isOpen }">
    <a href="#" class="nav-brand" @click.prevent="scrollToTop">Jun Johnny</a>

    <button
      class="menu-toggle"
      type="button"
      :aria-label="isOpen ? tr.nav.closeMenu : tr.nav.openMenu"
      :aria-expanded="String(isOpen)"
      @click="toggleMenu"
    >
      <component :is="isOpen ? X : Menu" :size="22" stroke-width="2.2" />
    </button>

    <div class="nav-panel" :class="{ open: isOpen }">
      <ul class="nav-links">
        <li v-for="(item, index) in navItems" :key="item.id" :style="{ '--item-index': index }">
          <a :href="`#${item.id}`" @click="scrollToSection(item.id, $event)">
            {{ item.label }}
          </a>
        </li>
      </ul>

      <div class="nav-controls">
        <div class="lang-toggle" :aria-label="tr.nav.language" role="group">
          <button
            v-for="option in languages"
            :key="option.value"
            class="lang-option"
            type="button"
            :class="{ active: lang === option.value }"
            :aria-pressed="String(lang === option.value)"
            @click="setLang(option.value)"
          >
            {{ option.label }}
          </button>
        </div>

        <button
          class="theme-btn"
          type="button"
          :title="`${tr.nav.theme}: ${themeLabel}`"
          :aria-label="`${tr.nav.theme}: ${themeLabel}`"
          @click="cycleTheme"
        >
          <component :is="themeIcon" :size="18" stroke-width="2.2" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Menu, Monitor, Moon, Sun, X } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n.js'

const { lang, t, setLang } = useI18n()
const tr = computed(() => t[lang.value])
const isOpen = ref(false)
const theme = ref('default')

const navItems = computed(() => [
  { id: 'about', label: tr.value.nav.about },
  { id: 'skills', label: tr.value.nav.skills },
  { id: 'projects', label: tr.value.nav.projects },
  { id: 'links', label: tr.value.nav.links },
])

const languages = [
  { value: 'en', label: 'EN' },
  { value: 'zh', label: '简' },
  { value: 'zhtw', label: '繁' },
]

const themeIcon = computed(() => {
  if (theme.value === 'light') return Sun
  if (theme.value === 'dark') return Moon
  return Monitor
})

const themeLabel = computed(() => {
  if (theme.value === 'light') return tr.value.nav.lightTheme
  if (theme.value === 'dark') return tr.value.nav.darkTheme
  return tr.value.nav.systemTheme
})

let systemThemeQuery = null

function closeMenu() {
  isOpen.value = false
}

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
  closeMenu()
}

function scrollToSection(id, event) {
  event.preventDefault()
  const target = document.getElementById(id)
  if (!target) return
  target.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  })
  closeMenu()
}

function applyTheme(nextTheme) {
  theme.value = nextTheme

  if (nextTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else if (nextTheme === 'light') {
    document.documentElement.removeAttribute('data-theme')
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }

  localStorage.setItem('theme', nextTheme)
}

function cycleTheme() {
  const order = ['default', 'light', 'dark']
  const next = order[(order.indexOf(theme.value) + 1) % order.length]
  applyTheme(next)
}

function handleSystemThemeChange() {
  if (theme.value === 'default') applyTheme('default')
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

watch(isOpen, (open) => {
  document.body.classList.toggle('nav-menu-open', open)
})

onMounted(() => {
  applyTheme(localStorage.getItem('theme') || 'default')
  systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
  systemThemeQuery.addEventListener('change', handleSystemThemeChange)
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.body.classList.remove('nav-menu-open')
  systemThemeQuery?.removeEventListener('change', handleSystemThemeChange)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--nav-height);
  padding: 0 2rem;
  background: var(--surface-glass);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(16px);
}

.nav-brand {
  position: relative;
  z-index: 2;
  font-size: 1.08rem;
  font-weight: 800;
  line-height: 1;
  color: var(--text);
  text-decoration: none;
}

.nav-brand::after {
  display: block;
  width: 42%;
  height: 3px;
  margin-top: 8px;
  content: "";
  background: linear-gradient(90deg, var(--primary), var(--accent));
  border-radius: 999px;
}

.nav-panel {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  list-style: none;
}

.nav-links a {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  padding: 0 0.85rem;
  font-size: 0.92rem;
  font-weight: 650;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 999px;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
  background: var(--accent-soft);
  transform: translateY(-1px);
}

.nav-links a:active,
.theme-btn:active,
.lang-option:active,
.menu-toggle:active {
  transform: scale(0.96);
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.lang-toggle {
  display: inline-grid;
  grid-template-columns: repeat(3, minmax(42px, 1fr));
  gap: 3px;
  padding: 4px;
  background: rgba(var(--primary-rgb), 0.08);
  border: 1px solid var(--border);
  border-radius: 999px;
}

.lang-option,
.theme-btn,
.menu-toggle {
  border: 0;
  cursor: pointer;
}

.lang-option {
  min-width: 42px;
  min-height: 34px;
  padding: 0 0.65rem;
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--text-muted);
  background: transparent;
  border-radius: 999px;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.lang-option.active {
  color: #fff;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 8px 20px -12px rgba(var(--accent-rgb), 0.8);
}

.theme-btn,
.menu-toggle {
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  color: var(--text);
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  box-shadow: var(--shadow-sm);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.theme-btn:hover,
.menu-toggle:hover {
  border-color: rgba(var(--accent-rgb), 0.42);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.menu-toggle {
  display: none;
  position: relative;
  z-index: 2;
}

@keyframes menuItemIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 760px) {
  .nav {
    padding: 0 1rem;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav-panel {
    position: fixed;
    top: calc(var(--nav-height) - 1px);
    right: 12px;
    left: 12px;
    display: grid;
    gap: 1rem;
    align-items: stretch;
    padding: 1rem;
    visibility: hidden;
    background: var(--surface-glass);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    opacity: 0;
    backdrop-filter: blur(18px);
    transform: translateY(-12px);
    transition:
      opacity 0.24s ease,
      transform 0.24s ease,
      visibility 0.24s ease;
  }

  .nav-panel.open {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  .nav-links {
    display: grid;
    gap: 0.4rem;
  }

  .nav-links li {
    opacity: 0;
  }

  .nav-panel.open .nav-links li {
    animation: menuItemIn 0.28s ease forwards;
    animation-delay: calc(var(--item-index) * 55ms);
  }

  .nav-links a {
    min-height: 46px;
    justify-content: center;
    padding: 0 1rem;
    color: var(--text);
    background: rgba(var(--primary-rgb), 0.08);
    border: 1px solid var(--border);
    border-radius: var(--radius);
  }

  .nav-controls {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.75rem;
  }

  .lang-toggle {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lang-option {
    min-height: 40px;
  }
}

@media (max-width: 380px) {
  .nav-brand {
    font-size: 1rem;
  }

  .nav-controls {
    grid-template-columns: 1fr;
  }

  .theme-btn {
    width: 100%;
  }
}
</style>

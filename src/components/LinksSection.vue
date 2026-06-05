<template>
  <section id="links" class="section fade-up" ref="el">
    <h2 class="section-title">{{ tr.links.title }}</h2>
    <div class="links-grid">
      <a
        class="link-card"
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="link-icon">
          <component :is="link.icon" :size="22" stroke-width="2.2" />
        </span>
        <span class="link-name">{{ link.name }}</span>
        <ExternalLink class="external-icon" :size="16" stroke-width="2.2" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ExternalLink, Github, Globe2, Mail, Puzzle } from 'lucide-vue-next'
import { useIntersect } from '../composables/useIntersect.js'
import { useI18n } from '../composables/useI18n.js'

const el = useIntersect()
const { lang, t } = useI18n()
const tr = computed(() => t[lang.value])

const links = [
  { name: 'GitHub', url: 'https://github.com/john0123412', icon: Github },
  { name: 'LeetCode CN', url: 'https://leetcode.cn/u/john0123412/', icon: Puzzle },
  { name: 'LeetCode Global', url: 'https://leetcode.com/u/john0123412/', icon: Globe2 },
  { name: 'Email', url: 'mailto:junjohn05@gmail.com', icon: Mail },
]
</script>

<style scoped>
.links-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.link-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.7rem;
  align-items: center;
  min-height: 76px;
  padding: 1rem;
  color: var(--text);
  text-decoration: none;
  background: var(--card-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(14px);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.link-card:hover {
  border-color: rgba(var(--accent-rgb), 0.45);
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.link-card:active {
  transform: scale(0.98);
}

.link-icon {
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: 12px;
}

.link-name {
  min-width: 0;
  overflow-wrap: anywhere;
  font-size: 0.92rem;
  font-weight: 800;
}

.external-icon {
  color: var(--text-muted);
  transition: transform 0.2s ease, color 0.2s ease;
}

.link-card:hover .external-icon {
  color: var(--accent);
  transform: translate(2px, -2px);
}

@media (max-width: 960px) {
  .links-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>

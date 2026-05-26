<template>
  <section id="links" class="section fade-up" ref="el">
    <h2 class="section-title">{{ tr.links.title }}</h2>
    <div class="links-grid">
      <a
        class="link-card"
        v-for="l in links"
        :key="l.name"
        :href="l.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="link-icon">{{ l.icon }}</span>
        <span class="link-name">{{ l.name }}</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useIntersect } from '../composables/useIntersect.js'
import { useI18n } from '../composables/useI18n.js'
const el = useIntersect()
const { lang, t } = useI18n()
const tr = computed(() => t[lang.value])

const links = [
  { name: 'GitHub', url: 'https://github.com/john0123412', icon: '💻' },
  { name: 'LeetCode CN', url: 'https://leetcode.cn/u/john0123412/', icon: '🧩' },
  { name: 'LeetCode Global', url: 'https://leetcode.com/u/john0123412/', icon: '🌍' },
  { name: 'Email', url: 'mailto:junjohn05@gmail.com', icon: '✉️' },
]
</script>

<style scoped>
.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}
.link-card {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.9rem 1.2rem;
  text-decoration: none;
  color: var(--text);
  transition: transform 0.2s ease, border-color 0.2s, box-shadow 0.2s;
}
.link-card:hover {
  transform: scale(1.05);
  border-color: var(--primary);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12);
}
.link-icon { font-size: 1.3rem; }
.link-name { font-weight: 500; font-size: 0.9rem; }

@media (max-width: 480px) {
  .links-grid { grid-template-columns: 1fr 1fr; gap: 0.8rem; }
  .link-card { padding: 0.7rem 0.9rem; }
  .link-name { font-size: 0.8rem; }
}
</style>

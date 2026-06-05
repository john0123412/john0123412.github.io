<template>
  <section id="skills" class="section fade-up" ref="el">
    <h2 class="section-title">{{ tr.skills.title }}</h2>
    <div class="skills-grid">
      <article
        class="skill-category"
        v-for="(cat, index) in tr.skills.categories"
        :key="cat.name"
        :style="{ '--reveal-delay': `${index * 70}ms` }"
      >
        <div class="skill-heading">
          <span class="skill-icon">
            <component :is="icons[index] || Sparkles" :size="22" stroke-width="2.2" />
          </span>
          <h3>{{ cat.name }}</h3>
        </div>
        <div class="skill-tags">
          <span class="tag" v-for="item in cat.items" :key="item">{{ item }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Bot, Code, Monitor, Shield, Sparkles } from 'lucide-vue-next'
import { useIntersect } from '../composables/useIntersect.js'
import { useI18n } from '../composables/useI18n.js'

const el = useIntersect()
const { lang, t } = useI18n()
const tr = computed(() => t[lang.value])
const icons = [Code, Shield, Bot, Monitor]
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.skill-category {
  min-width: 0;
  padding: 1.15rem;
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

.skill-category:hover {
  border-color: rgba(var(--accent-rgb), 0.42);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.skill-category:active {
  transform: scale(0.99);
}

.skill-heading {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.9rem;
}

.skill-icon {
  display: inline-flex;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid rgba(var(--accent-rgb), 0.18);
  border-radius: 12px;
}

.skill-heading h3 {
  min-width: 0;
  font-size: 0.98rem;
  line-height: 1.3;
  color: var(--text);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.tag {
  max-width: 100%;
  padding: 0.3rem 0.62rem;
  overflow-wrap: anywhere;
  font-size: 0.78rem;
  font-weight: 750;
  line-height: 1.2;
  color: var(--primary);
  background: var(--primary-light);
  border: 1px solid rgba(var(--primary-rgb), 0.12);
  border-radius: 999px;
}

@media (max-width: 980px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>

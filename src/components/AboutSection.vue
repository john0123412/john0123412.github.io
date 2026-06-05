<template>
  <section id="about" class="section fade-up" ref="el">
    <h2 class="section-title">{{ tr.about.title }}</h2>
    <div class="about-card">
      <p v-html="tr.about.p1"></p>
      <p v-html="tr.about.p2"></p>
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
</script>

<style scoped>
.about-card {
  display: grid;
  gap: 1rem;
  padding: 1.35rem;
  background: var(--card-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(14px);
}

p {
  color: var(--text-muted);
  font-size: 1rem;
}

p :deep(strong) {
  color: var(--text);
}
</style>

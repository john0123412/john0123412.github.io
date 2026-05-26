<template>
  <section id="about" class="section fade-up" ref="el">
    <h2 class="section-title">{{ tr.about.title }}</h2>
    <p v-html="tr.about.p1"></p>
    <p v-html="tr.about.p2"></p>
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
p { color: var(--text-muted); margin-bottom: 0.8rem; }
p :deep(strong) { color: var(--text); }
</style>

<template>
  <footer class="footer">
    <p>&copy; 2026 Jun Johnny · {{ tr.footer }}</p>
    <VisitorCount />
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import VisitorCount from './VisitorCount.vue'
const { lang, t } = useI18n()
const tr = computed(() => t[lang.value])
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--border);
  margin-top: 2rem;
}
</style>

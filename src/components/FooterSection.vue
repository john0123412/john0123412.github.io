<template>
  <footer class="footer">
    <div class="footer-inner">
      <p>&copy; 2026 Jun Johnny · {{ tr.footer }}</p>
      <div class="footer-actions" aria-label="Social links">
        <a href="https://github.com/john0123412" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github :size="18" stroke-width="2.2" />
        </a>
        <a href="mailto:junjohn05@gmail.com" aria-label="Email">
          <Mail :size="18" stroke-width="2.2" />
        </a>
      </div>
      <VisitorCount />
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Github, Mail } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n.js'
import VisitorCount from './VisitorCount.vue'

const { lang, t } = useI18n()
const tr = computed(() => t[lang.value])
</script>

<style scoped>
.footer {
  width: min(1120px, calc(100% - 48px));
  margin: 2rem auto 0;
  padding: 0 0 2.5rem;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  color: var(--text-muted);
  font-size: 0.86rem;
  background: var(--card-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(14px);
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-actions a {
  display: inline-flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  color: var(--text);
  text-decoration: none;
  background: var(--accent-soft);
  border: 1px solid rgba(var(--accent-rgb), 0.16);
  border-radius: 999px;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.footer-actions a:hover {
  color: var(--accent);
  border-color: rgba(var(--accent-rgb), 0.42);
  transform: translateY(-2px);
}

.footer-actions a:active {
  transform: scale(0.95);
}

@media (max-width: 640px) {
  .footer {
    width: min(100% - 32px, 680px);
  }

  .footer-inner {
    justify-content: center;
    text-align: center;
  }
}
</style>

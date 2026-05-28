<template>
  <span class="visitor-count" v-if="count !== null">
    {{ count }} visitors today
  </span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const count = ref(null)

onMounted(async () => {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3000)

    const res = await fetch('/api/stats', { signal: controller.signal })
    clearTimeout(timeout)

    if (!res.ok) return
    const data = await res.json()
    count.value = data.today
  } catch {
    // 静默失败，组件不渲染
  }
})
</script>

<style scoped>
.visitor-count {
  font-size: 12px;
  opacity: 0.45;
  letter-spacing: 0.02em;
}
</style>

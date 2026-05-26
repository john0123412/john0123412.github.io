import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersect() {
  const el = ref(null)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.15 }
    )
    if (el.value) observer.observe(el.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return el
}

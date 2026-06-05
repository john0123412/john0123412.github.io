<template>
  <canvas ref="canvasEl" class="particle-backdrop" aria-hidden="true"></canvas>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasEl = ref(null)

let ctx = null
let particles = []
let frameId = 0
let resizeTimer = 0
let desktopQuery = null
let reducedMotionQuery = null
let isRunning = false

function canAnimate() {
  return desktopQuery?.matches && !reducedMotionQuery?.matches && document.visibilityState === 'visible'
}

function getBounds() {
  const canvas = canvasEl.value
  const parent = canvas?.parentElement
  return parent?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight }
}

function createParticles(width, height) {
  const count = Math.min(60, Math.max(30, Math.floor(width / 26)))
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    size: 1.2 + Math.random() * 1.8,
    alpha: 0.3 + Math.random() * 0.38,
  }))
}

function resizeCanvas() {
  const canvas = canvasEl.value
  if (!canvas) return

  const { width, height } = getBounds()
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
  canvas.width = Math.max(1, Math.floor(width * dpr))
  canvas.height = Math.max(1, Math.floor(height * dpr))
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  createParticles(width, height)
}

function drawConnections(width, height, accent) {
  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance > 118) continue

      ctx.beginPath()
      ctx.moveTo(particles[i].x, particles[i].y)
      ctx.lineTo(particles[j].x, particles[j].y)
      ctx.strokeStyle = `rgba(${accent}, ${0.1 * (1 - distance / 118)})`
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }

  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, `rgba(${accent}, 0.08)`)
  gradient.addColorStop(1, 'rgba(37, 99, 235, 0.02)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
}

function tick() {
  if (!canAnimate() || !ctx) {
    isRunning = false
    return
  }

  const { width, height } = getBounds()
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb').trim() || '8, 145, 178'
  ctx.clearRect(0, 0, width, height)

  drawConnections(width, height, accent)

  for (const particle of particles) {
    particle.x += particle.vx
    particle.y += particle.vy

    if (particle.x < 0 || particle.x > width) particle.vx *= -1
    if (particle.y < 0 || particle.y > height) particle.vy *= -1

    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${accent}, ${particle.alpha})`
    ctx.fill()
  }

  frameId = window.requestAnimationFrame(tick)
}

function stopAnimation() {
  window.cancelAnimationFrame(frameId)
  frameId = 0
  isRunning = false
  ctx?.clearRect(0, 0, canvasEl.value?.width || 0, canvasEl.value?.height || 0)
}

function startAnimation() {
  if (!canAnimate()) {
    stopAnimation()
    return
  }

  resizeCanvas()
  if (!isRunning) {
    isRunning = true
    frameId = window.requestAnimationFrame(tick)
  }
}

function handleResize() {
  window.clearTimeout(resizeTimer)
  resizeTimer = window.setTimeout(startAnimation, 160)
}

function handleCapabilityChange() {
  if (canAnimate()) startAnimation()
  else stopAnimation()
}

onMounted(() => {
  desktopQuery = window.matchMedia('(min-width: 769px)')
  reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  window.addEventListener('resize', handleResize, { passive: true })
  document.addEventListener('visibilitychange', handleCapabilityChange)
  desktopQuery.addEventListener('change', handleCapabilityChange)
  reducedMotionQuery.addEventListener('change', handleCapabilityChange)

  startAnimation()
})

onBeforeUnmount(() => {
  stopAnimation()
  window.clearTimeout(resizeTimer)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('visibilitychange', handleCapabilityChange)
  desktopQuery?.removeEventListener('change', handleCapabilityChange)
  reducedMotionQuery?.removeEventListener('change', handleCapabilityChange)
})
</script>

<style scoped>
.particle-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.86;
  transform: translateZ(0);
  will-change: transform;
}

@media (max-width: 768px), (prefers-reduced-motion: reduce) {
  .particle-backdrop {
    display: none;
  }
}
</style>

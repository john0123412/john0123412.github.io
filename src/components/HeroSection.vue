<template>
  <section class="hero" aria-labelledby="hero-title">
    <ParticleBackdrop />

    <div class="hero-content">
      <p class="hero-kicker">
        <span>{{ tr.hero.kicker }}</span>
      </p>

      <h1 id="hero-title" class="hero-title">
        Hi, I'm <span>Jun Johnny</span>
      </h1>

      <p class="hero-subtitle">{{ tr.hero.subtitle }}</p>

      <div class="hero-ctas">
        <a href="#projects" class="btn btn-primary">
          {{ tr.hero.viewProjects }}
          <ArrowRight :size="18" stroke-width="2.3" />
        </a>
        <a href="#links" class="btn btn-secondary">
          {{ tr.hero.contact }}
          <Mail :size="18" stroke-width="2.2" />
        </a>
        <a
          href="https://github.com/john0123412"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-icon"
          :aria-label="tr.hero.github"
        >
          <Github :size="20" stroke-width="2.2" />
        </a>
      </div>
    </div>

    <a href="#about" class="scroll-cue" :aria-label="tr.hero.scroll">
      <ChevronDown :size="24" stroke-width="2.2" />
    </a>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowRight, ChevronDown, Github, Mail } from 'lucide-vue-next'
import ParticleBackdrop from './ParticleBackdrop.vue'
import { useI18n } from '../composables/useI18n.js'

const { lang, t } = useI18n()
const tr = computed(() => t[lang.value])
</script>

<style scoped>
.hero {
  position: relative;
  display: grid;
  min-height: calc(90svh - var(--nav-height));
  padding: 7rem 2rem 5rem;
  overflow: hidden;
  isolation: isolate;
  place-items: center;
}

.hero::before {
  position: absolute;
  inset: 10% 8% auto;
  z-index: 0;
  height: 42%;
  content: "";
  background:
    linear-gradient(120deg, rgba(var(--primary-rgb), 0.12), rgba(var(--accent-rgb), 0.16)),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16), transparent 64%);
  filter: blur(42px);
  transform: translateZ(0);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(920px, 100%);
  text-align: center;
}

.hero-kicker {
  display: inline-flex;
  max-width: 100%;
  margin-bottom: 1rem;
  overflow: hidden;
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.35;
  color: var(--accent);
}

.hero-kicker span {
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  border-right: 2px solid var(--accent);
  animation: blinkCaret 0.78s step-end infinite;
}

.hero-title {
  margin-bottom: 1rem;
  font-size: 4.35rem;
  font-weight: 900;
  line-height: 1.02;
  color: var(--text);
  overflow-wrap: anywhere;
}

.hero-title span {
  color: transparent;
  background: linear-gradient(110deg, var(--primary), var(--accent));
  background-clip: text;
}

.hero-subtitle {
  width: min(720px, 100%);
  margin: 0 auto 2.2rem;
  font-size: 1.16rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  justify-content: center;
  width: 100%;
}

.btn {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.75rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 800;
  line-height: 1;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.btn:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.btn:active {
  transform: scale(0.97);
}

.btn-primary {
  color: #fff;
  background: linear-gradient(135deg, var(--primary), var(--accent));
}

.btn-secondary,
.btn-icon {
  color: var(--text);
  background: var(--card-bg);
  border-color: var(--border);
  backdrop-filter: blur(14px);
}

.btn-secondary:hover,
.btn-icon:hover {
  border-color: rgba(var(--accent-rgb), 0.45);
}

.btn-icon {
  width: 46px;
  padding: 0;
}

.scroll-cue {
  position: absolute;
  bottom: 1.4rem;
  left: 50%;
  z-index: 1;
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  text-decoration: none;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  box-shadow: var(--shadow-sm);
  transform: translateX(-50%);
  animation: cueFloat 1.8s ease-in-out infinite;
}

@keyframes blinkCaret {
  50% {
    border-color: transparent;
  }
}

@keyframes cueFloat {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 6px);
  }
}

@media (min-width: 1200px) {
  .hero-title {
    font-size: 4.75rem;
  }
}

@media (max-width: 860px) {
  .hero {
    min-height: calc(86svh - var(--nav-height));
    padding: 5rem 1.5rem 4.5rem;
  }

  .hero-title {
    font-size: 3.2rem;
  }

  .hero-subtitle {
    font-size: 1.06rem;
  }
}

@media (max-width: 560px) {
  .hero {
    min-height: auto;
    padding: 4.4rem 1rem 4rem;
  }

  .hero-kicker {
    width: min(100%, 330px);
    justify-content: center;
    font-size: 0.82rem;
  }

  .hero-kicker span {
    white-space: normal;
    border-right: 0;
    animation: none;
  }

  .hero-title {
    width: 100%;
    font-size: 2.35rem;
    line-height: 1.08;
  }

  .hero-subtitle {
    margin-bottom: 1.7rem;
    font-size: 0.98rem;
  }

  .hero-ctas {
    align-items: stretch;
  }

  .btn {
    width: 100%;
    max-width: 100%;
    flex: 1 1 100%;
  }

  .btn-icon {
    flex: 0 0 46px;
    margin: 0 auto;
  }
}
</style>

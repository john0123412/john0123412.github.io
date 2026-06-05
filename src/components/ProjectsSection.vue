<template>
  <section id="projects" class="section fade-up" ref="el">
    <h2 class="section-title">{{ tr.projects.title }}</h2>
    <div class="projects-grid">
      <article class="project-card">
        <div class="terminal-preview" aria-hidden="true">
          <div class="terminal-top">
            <span></span>
            <span></span>
            <span></span>
            <strong>{{ tr.projects.preview.title }}</strong>
          </div>
          <div class="terminal-body">
            <p><span>$</span> {{ tr.projects.preview.prompt }}</p>
            <p class="terminal-line ok">{{ tr.projects.preview.line1 }}</p>
            <p class="terminal-line">{{ tr.projects.preview.line2 }}</p>
            <p class="terminal-line accent">{{ tr.projects.preview.line3 }}</p>
          </div>
        </div>

        <div class="project-content">
          <div class="card-header">
            <div>
              <p class="eyebrow">{{ tr.projects.status }}</p>
              <h3>PawnLogic</h3>
            </div>
            <span class="project-icon">
              <Terminal :size="24" stroke-width="2.2" />
            </span>
          </div>

          <p class="card-desc">{{ tr.projects.desc }}</p>

          <ul class="highlights">
            <li v-for="item in highlights" :key="item.label">
              <component :is="item.icon" :size="17" stroke-width="2.2" />
              <span><strong>{{ item.label }}:</strong> {{ item.text }}</span>
            </li>
          </ul>

          <div class="skill-tags">
            <span class="tag" v-for="item in tags" :key="item">{{ item }}</span>
          </div>

          <a
            class="project-action"
            href="https://github.com/john0123412/PawnLogic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github :size="18" stroke-width="2.2" />
            {{ tr.projects.github }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Database, Github, Shield, Terminal, Wrench } from 'lucide-vue-next'
import { useIntersect } from '../composables/useIntersect.js'
import { useI18n } from '../composables/useI18n.js'

const el = useIntersect()
const { lang, t } = useI18n()
const tr = computed(() => t[lang.value])

const tags = ['Python', 'LLM Tool-Calling', 'Docker API', 'Linux', 'Security']
const highlights = computed(() => [
  { ...tr.value.projects.h1, icon: Shield },
  { ...tr.value.projects.h2, icon: Database },
  { ...tr.value.projects.h3, icon: Wrench },
])
</script>

<style scoped>
.projects-grid {
  display: grid;
  gap: 1.25rem;
}

.project-card {
  display: grid;
  grid-template-columns: minmax(280px, 0.88fr) minmax(0, 1.12fr);
  gap: 1.2rem;
  padding: 1.2rem;
  overflow: hidden;
  background: var(--card-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(16px);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.project-card:hover {
  border-color: rgba(var(--accent-rgb), 0.45);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px) scale(1.02);
}

.project-card:active {
  transform: scale(0.995);
}

.terminal-preview {
  min-height: 310px;
  overflow: hidden;
  color: #d7fbff;
  background:
    linear-gradient(135deg, rgba(8, 145, 178, 0.2), transparent 38%),
    #06111e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.terminal-top {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 42px;
  padding: 0 1rem;
  color: rgba(215, 251, 255, 0.68);
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.terminal-top span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
}

.terminal-top span:nth-child(1) {
  background: #ff6b6b;
}

.terminal-top span:nth-child(2) {
  background: #fbbf24;
}

.terminal-top span:nth-child(3) {
  background: #34d399;
}

.terminal-top strong {
  margin-left: 0.45rem;
  overflow: hidden;
  font-size: 0.78rem;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.terminal-body {
  display: grid;
  gap: 0.75rem;
  padding: 1.2rem;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.84rem;
  line-height: 1.5;
}

.terminal-body p {
  overflow-wrap: anywhere;
}

.terminal-body p:first-child span {
  color: #22d3ee;
}

.terminal-line {
  position: relative;
  padding-left: 1.2rem;
  color: rgba(215, 251, 255, 0.72);
}

.terminal-line::before {
  position: absolute;
  left: 0;
  content: ">";
  color: rgba(34, 211, 238, 0.8);
}

.terminal-line.ok {
  color: #baf7d1;
}

.terminal-line.accent {
  color: #a5f3fc;
}

.project-content {
  min-width: 0;
  padding: 0.3rem 0.2rem;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.eyebrow {
  margin-bottom: 0.2rem;
  font-size: 0.72rem;
  font-weight: 900;
  color: var(--accent);
  text-transform: uppercase;
}

.card-header h3 {
  font-size: 2rem;
  line-height: 1.1;
  color: var(--text);
}

.project-icon {
  display: inline-flex;
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid rgba(var(--accent-rgb), 0.18);
  border-radius: 12px;
}

.card-desc {
  margin-bottom: 1rem;
  color: var(--text-muted);
  font-size: 0.96rem;
}

.highlights {
  display: grid;
  gap: 0.72rem;
  margin-bottom: 1rem;
  list-style: none;
}

.highlights li {
  display: flex;
  gap: 0.55rem;
  min-width: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.highlights svg {
  flex: 0 0 auto;
  margin-top: 0.22rem;
  color: var(--accent);
}

.highlights span {
  min-width: 0;
  overflow-wrap: anywhere;
}

.highlights strong {
  color: var(--text);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.1rem;
}

.tag {
  max-width: 100%;
  padding: 0.3rem 0.6rem;
  overflow-wrap: anywhere;
  font-size: 0.75rem;
  font-weight: 800;
  line-height: 1.2;
  color: var(--primary);
  background: var(--primary-light);
  border-radius: 999px;
}

.project-action {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 0.9rem;
  font-size: 0.9rem;
  font-weight: 850;
  color: #fff;
  text-decoration: none;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.project-action:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.project-action:active {
  transform: scale(0.97);
}

@media (max-width: 860px) {
  .project-card {
    grid-template-columns: 1fr;
  }

  .terminal-preview {
    min-height: 240px;
  }
}

@media (max-width: 520px) {
  .project-card {
    padding: 0.85rem;
  }

  .card-header h3 {
    font-size: 1.55rem;
  }

  .terminal-preview {
    min-height: 220px;
  }
}
</style>

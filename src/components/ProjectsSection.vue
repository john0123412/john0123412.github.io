<template>
  <section id="projects" class="section fade-up" ref="el">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <a
        class="project-card"
        v-for="p in projects"
        :key="p.title"
        :href="p.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{{ p.title }}</h3>
        <p>{{ p.desc }}</p>
        <div class="skill-tags">
          <span class="tag" v-for="t in p.tags" :key="t">{{ t }}</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { useIntersect } from '../composables/useIntersect.js'
const el = useIntersect()

const projects = [
  {
    title: 'PawnLogic',
    desc: 'A fully autonomous terminal AI agent — multi-model routing, persistent memory, real tool execution, and CTF toolchain.',
    url: 'https://github.com/john0123412/PawnLogic',
    tags: ['Python', 'AI Agent', 'LLM', 'Security'],
  },
  {
    title: 'Python Algorithms',
    desc: 'Algorithm and data structure practice — LeetCode solutions and classic implementations.',
    url: 'https://github.com/john0123412',
    tags: ['Python', 'Algorithms', 'Data Structures'],
  },
]
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;
}
.project-card {
  display: block;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.3rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.project-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.1);
}
.project-card h3 {
  margin-bottom: 0.4rem;
  color: var(--text);
}
.project-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.tag {
  background: var(--primary-light);
  color: var(--primary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}
@media (max-width: 480px) {
  .projects-grid { grid-template-columns: 1fr; }
  .project-card { padding: 1rem; }
}
</style>

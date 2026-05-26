<template>
  <section id="skills" class="section fade-up" ref="el">
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      <div class="skill-category" v-for="cat in categories" :key="cat.name">
        <h3>{{ cat.name }}</h3>
        <div class="skill-tags">
          <span class="tag" v-for="item in cat.items" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useIntersect } from '../composables/useIntersect.js'
const el = useIntersect()

const categories = [
  { name: 'Languages', items: ['Python', 'Java', 'JavaScript', 'C'] },
  { name: 'Security', items: ['Network Security', 'CTF / Pwn', 'Penetration Testing'] },
  { name: 'AI / Agent', items: ['LLM Agents', 'Prompt Engineering', 'MCP', 'Tool-Use'] },
  { name: 'DevOps', items: ['Git', 'Linux', 'Docker', 'GitHub Actions'] },
]
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}
.skill-category h3 {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.tag {
  background: var(--primary-light);
  color: var(--primary);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}
@media (max-width: 480px) {
  .skills-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
  .tag { font-size: 0.75rem; padding: 0.2rem 0.5rem; }
}
</style>

<template>
  <section id="projects" class="section fade-up" ref="el">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <a
        class="project-card"
        href="https://github.com/john0123412/PawnLogic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="card-header">
          <h3>PawnLogic</h3>
          <span class="status-badge">🛠️ Active Development</span>
        </div>
        <p class="card-desc">A terminal-based AI agent framework engineered for autonomous task execution and sandboxed security workflows.</p>
        <ul class="highlights">
          <li><strong>Docker Sandboxing:</strong> Dynamic environment isolation to securely execute agent-generated commands.</li>
          <li><strong>Context &amp; Memory:</strong> Local persistent storage for complex, multi-turn technical workflows.</li>
          <li><strong>Tool-Use &amp; Automation:</strong> Custom schemas for automated file manipulation and network tasks.</li>
        </ul>
        <div class="skill-tags">
          <span class="tag" v-for="t in ['Python', 'LLM Tool-Calling', 'Docker API', 'Linux', 'Security']" :key="t">{{ t }}</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { useIntersect } from '../composables/useIntersect.js'
const el = useIntersect()
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
.card-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.4rem;
  flex-wrap: wrap;
}
.card-header h3 {
  color: var(--text);
  margin: 0;
}
.status-badge {
  font-size: 0.75rem;
  color: var(--primary);
  background: var(--primary-light);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
}
.card-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}
.highlights {
  color: var(--text-muted);
  font-size: 0.85rem;
  padding-left: 1.2rem;
  margin-bottom: 0.9rem;
  line-height: 1.7;
}
.highlights strong {
  color: var(--text);
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

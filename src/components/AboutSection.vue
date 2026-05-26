<template>
  <section id="about" class="section fade-up" ref="el">
    <h2 class="section-title">About Me</h2>
    <p>I'm a Computer Science student driven by <strong>systems programming</strong>, <strong>automation</strong>, and <strong>offensive security</strong>. Instead of just studying theory, I prefer building and breaking systems to understand their underlying mechanics.</p>
    <p>My primary engineering focus right now is <strong>PawnLogic</strong>, a terminal-based AI agent framework designed to explore multi-model routing, sandbox isolation via Docker, and persistent memory. When I'm not developing automation tools, I'm diving into penetration testing workflows within Kali Linux environments, conducting web vulnerability research, and refining automated script execution.</p>
  </section>
</template>

<script setup>
import { useIntersect } from '../composables/useIntersect.js'
const el = useIntersect()
</script>

<style scoped>
p { color: var(--text-muted); margin-bottom: 0.8rem; }
strong { color: var(--text); }
</style>

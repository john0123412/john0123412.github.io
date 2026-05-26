<template>
  <section id="about" class="section fade-up" ref="el">
    <h2 class="section-title">About Me</h2>
    <p>I'm a Computer Science student with a strong focus on <strong>cybersecurity</strong> and <strong>AI Agent</strong> development.</p>
    <p>I enjoy exploring how LLM-powered autonomous agents can orchestrate complex tasks, and how offensive/defensive security practices protect the systems we build. Currently grinding algorithms, shipping open-source projects, and diving deep into agent architectures.</p>
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

<template>
  <section class="hero">
    <h1 class="hero-title">Hi, I'm <span class="highlight">Jun Johnny</span></h1>
    <p class="hero-subtitle">CS Student · Cybersecurity · AI Agent Builder</p>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 6rem 2rem 3rem;
  animation: fadeIn 0.8s ease;
}
.hero-title {
  font-size: 2.6rem;
  margin-bottom: 0.5rem;
}
.highlight {
  color: var(--primary);
}
.hero-subtitle {
  color: var(--text-muted);
  font-size: 1.15rem;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 600px) {
  .hero { padding: 4rem 1.2rem 2rem; }
  .hero-title { font-size: 1.9rem; }
}
</style>

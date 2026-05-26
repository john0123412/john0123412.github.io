<template>
  <section class="hero">
    <h1 class="hero-title">Hi, I'm <span class="highlight">Jun Johnny</span></h1>
    <p class="hero-subtitle">I focus on AI Agent automation, penetration testing (Kali Linux), web security labs, and building practical full-stack tools.</p>
    <div class="hero-ctas">
      <a href="#projects" class="btn btn-primary">View Projects</a>
      <a href="https://github.com/john0123412" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
    </div>
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
  max-width: 600px;
  margin: 0 auto 1.8rem;
}
.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  padding: 0.6rem 1.4rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
}
.btn-primary {
  background: var(--primary);
  color: #fff;
}
.btn-secondary {
  background: var(--card-bg);
  color: var(--text);
  border: 1px solid var(--border);
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 768px) {
  .hero { padding: 4rem 1.5rem 2rem; }
  .hero-title { font-size: 2rem; }
  .hero-subtitle { font-size: 1rem; }
}
@media (max-width: 480px) {
  .hero { padding: 3rem 1rem 1.5rem; }
  .hero-title { font-size: 1.6rem; }
  .hero-subtitle { font-size: 0.9rem; }
}
</style>

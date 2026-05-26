<template>
  <nav class="nav">
    <div class="nav-brand">Jun Johnny</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#links">Links</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  background: rgba(248, 250, 252, 0.92);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border);
  z-index: 100;
}
.nav-brand {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--primary);
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: var(--primary);
}
@media (max-width: 600px) {
  .nav { padding: 0.8rem 1rem; }
  .nav-links { gap: 1rem; font-size: 0.85rem; }
}
</style>

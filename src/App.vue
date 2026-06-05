<template>
  <div class="app-shell">
    <div class="top-progress" :class="{ active: isPageBusy }" aria-hidden="true"></div>
    <NavBar />
    <Transition name="page-fade" mode="out-in" @after-enter="finishLanguageTransition">
      <main :key="lang" class="page-shell" :class="{ 'is-switching': isLanguageSwitching }">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <LinksSection />
        <FooterSection />
      </main>
    </Transition>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import LinksSection from './components/LinksSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useI18n } from './composables/useI18n.js'

const { lang } = useI18n()
const isPageBusy = ref(true)
const isLanguageSwitching = ref(false)

let progressTimer = 0
let languageTimer = 0

function pulseProgress() {
  isPageBusy.value = true
  window.clearTimeout(progressTimer)
  progressTimer = window.setTimeout(() => {
    isPageBusy.value = false
  }, 560)
}

function finishLanguageTransition() {
  isLanguageSwitching.value = false
}

watch(lang, () => {
  isLanguageSwitching.value = true
  pulseProgress()
  window.clearTimeout(languageTimer)
  languageTimer = window.setTimeout(finishLanguageTransition, 760)
})

onMounted(() => {
  pulseProgress()
})

onBeforeUnmount(() => {
  window.clearTimeout(progressTimer)
  window.clearTimeout(languageTimer)
})
</script>

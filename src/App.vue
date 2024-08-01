<template>
  <div class="flex">
    <SideMenu />
    <main class="flex-1 overflow-y-auto h-screen">
      <section>
        <HeroSection />
      </section>
    </main>
  </div>
</template>

<script setup>
import SideMenu from "./components/SideMenu.vue";
import HeroSection from "./components/HeroSection.vue";
</script>

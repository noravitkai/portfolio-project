<template>
  <div class="flex min-h-screen">
    <SideMenu />
    <div class="flex-1 overflow-y-auto ml-16">
      <main>
        <router-view />
      </main>
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import SideMenu from "./components/SideMenu.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

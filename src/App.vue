<template>
  <div class="flex">
    <SideMenu />
    <main class="flex-1 overflow-y-auto ml-16">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SideMenu from "./components/SideMenu.vue";
</script>

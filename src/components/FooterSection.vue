<template>
  <footer>
    <div
      class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 xl:pt-16 pb-4"
    >
      <div class="pt-4 xl:pt-4 border-t border-zinc-200"></div>
      <div
        class="flex justify-between text-left text-xs sm:text-sm text-zinc-900"
      >
        <p class="mt-0">&copy; {{ currentYear }} • Nora Vitkai</p>
        <p class="block sm:inline">All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>

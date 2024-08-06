<template>
  <div
    class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 xl:pt-16"
  >
    <div>
      <span class="flex items-center">
        <span
          class="pr-4 text-sm md:text-base 2xl:text-lg text-zinc-900 uppercase"
        >
          Latest Projects
        </span>
        <span class="h-px flex-1 bg-zinc-200"></span>
      </span>
    </div>
    <div class="pt-8 xl:pt-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <article
          v-for="project in projects"
          :key="project.id"
          class="relative group overflow-hidden border border-zinc-100 bg-white shadow-sm hover:shadow-lg transition ease-in-out duration-300"
        >
          <div class="overflow-hidden">
            <img
              :alt="project.title"
              :src="project.images[0]"
              class="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div class="flex flex-col gap-3 p-4 sm:p-6">
            <h3
              class="text-sm md:text-base 2xl:text-lg text-zinc-900 font-medium"
            >
              {{ project.title }}
            </h3>

            <p
              class="line-clamp-3 text-sm md:text-base 2xl:text-lg text-zinc-700"
            >
              {{ project.scope }}
            </p>

            <router-link
              :to="`/projects/${project.id}`"
              class="clickable-parent inline-flex items-center text-sm md:text-base 2xl:text-lg text-yellow font-medium"
            >
              Read more
              <ArrowRightIcon class="ml-1 h-4 w-4" aria-hidden="true" />
            </router-link>
          </div>
        </article>
      </div>
    </div>
    <div class="pt-4 lg:pt-8">
      <div
        class="bg-zinc-100 px-4 sm:px-6 py-6 sm:py-8 lg:flex lg:items-center lg:justify-between text-zinc-900"
      >
        <p class="pr-4 text-sm md:text-base 2xl:text-lg font-medium text-left">
          Want to see more of my work?
          <br class="sm:hidden" />
          Discover my complete portfolio!
        </p>
        <span class="h-px flex-1 bg-zinc-200"></span>
        <div class="mt-4 lg:mt-0 pl-0 lg:pl-4">
          <router-link
            to="/projects"
            class="relative max-w-max px-4 py-2 group text-zinc-900"
            exact-active-class="active"
          >
            <span
              class="absolute inset-0 bg-yellow w-full h-full transition ease-in-out duration-300 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span class="absolute inset-0 border-2 border-zinc-900"></span>
            <span class="relative">Browse Projects</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "../projects.js";

const route = useRoute();

const projectData = computed(() => {
  const id = route.params.projectId;
  return projects.find((project) => project.id === id) || {};
});
</script>

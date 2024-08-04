<template>
  <div
    class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 xl:pt-16"
  >
    <div>
      <span class="flex items-center">
        <span
          class="pr-4 text-sm md:text-base 2xl:text-lg text-zinc-900 uppercase"
        >
          My Projects
        </span>
        <span class="h-px flex-1 bg-zinc-200"></span>
        <div class="ml-4">
          <router-link
            :to="{ path: '/', hash: '#experience' }"
            class="relative max-w-max px-4 py-2 group text-zinc-900"
          >
            <span
              class="absolute inset-0 bg-yellow w-full h-full transition ease-in-out duration-300 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span class="absolute inset-0 border-2 border-zinc-900"></span>
            <span class="relative">Back</span>
          </router-link>
        </div>
      </span>
    </div>
    <div class="pt-8 xl:pt-16">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
      >
        <article
          v-for="project in projects"
          :key="project.title"
          class="relative overflow-hidden border border-zinc-100 bg-white shadow-sm hover:shadow-lg hover:scale-105 transition ease-in-out duration-300"
        >
          <img
            :alt="project.title"
            :src="project.image"
            class="h-56 w-full object-cover"
          />

          <div class="flex flex-col gap-3 p-4 sm:p-6">
            <h3
              class="text-sm md:text-base 2xl:text-lg text-zinc-900 font-medium"
            >
              {{ project.title }}
            </h3>

            <p
              class="line-clamp-3 text-sm md:text-base 2xl:text-lg text-zinc-700"
            >
              {{ project.description }}
            </p>

            <a
              :href="project.link"
              class="clickable-parent inline-flex items-center text-sm md:text-base 2xl:text-lg text-yellow font-medium"
            >
              Read more
              <ArrowRightIcon class="ml-1 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const projects = [
  {
    title: "Website for GG Szépségstúdió",
    description:
      "A website for a beauty salon in Hungary. The website is built with WordPress and Tailwind CSS.",
    image: "/src/assets/gg-szepsegstudio-website-project.jpg",
    link: "#",
  },
  {
    title: "Website for Fiatalok Konferenciája",
    description:
      "A website for a conference in Hungary. The website is built with WordPress and Tailwind CSS.",
    image: "/src/assets/gg-szepsegstudio-website-project.jpg",
    link: "#",
  },
  {
    title: "Website for Hufbau",
    description:
      "A website for a construction company in Hungary. The website is built with Vue.js and Tailwind CSS.",
    image: "/src/assets/gg-szepsegstudio-website-project.jpg",
    link: "#",
  },
];
</script>

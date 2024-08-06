<template>
  <div
    class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 xl:pt-12"
  >
    <div>
      <span class="flex items-center">
        <div class="mr-4">
          <router-link
            :to="{ path: '/', hash: '#hero' }"
            class="relative max-w-max px-4 py-2 group text-zinc-900"
          >
            <span
              class="absolute inset-0 bg-yellow w-full h-full transition ease-in-out duration-300 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span class="absolute inset-0 border-2 border-zinc-900"></span>
            <span class="relative">Back to Projects</span>
          </router-link>
        </div>
        <span class="h-px flex-1 bg-zinc-200"></span>
        <span class="pl-6 relative">
          <span
            class="relative text-sm md:text-base 2xl:text-lg text-zinc-900 uppercase underline-offset"
          >
            {{ projectData.title }}
          </span>
        </span>
      </span>
    </div>
    <div class="pt-8 xl:pt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
      <div class="lg:col-span-2">
        <div class="mt-6 flow-root">
          <dl class="-my-3 divide-y divide-zinc-100 text-sm">
            <div
              v-for="(value, key) in projectData.details"
              :key="key"
              class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"
            >
              <dt class="font-medium text-zinc-900">{{ key }}</dt>
              <dd class="text-zinc-700 sm:col-span-2">
                <template v-if="key === 'Link'">
                  <a
                    :href="formattedUrl(value)"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center underline underline-offset-2 hover:text-yellow transition ease-in-out duration-300"
                  >
                    {{ formatLinkText(value) }}
                    <ArrowTopRightOnSquareIcon
                      class="ml-1 h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                </template>
                <template v-else>
                  {{ value }}
                </template>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="relative w-full overflow-hidden md:col-span-1 aspect-square">
        <img
          :alt="projectData.title"
          :src="projectData.images[0]"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
    <div class="pt-8 xl:pt-16">
      <div>
        <span class="flex items-center">
          <span
            class="pr-4 text-sm md:text-base 2xl:text-lg text-zinc-900 uppercase"
          >
            Project Details
          </span>
          <span class="h-px flex-1 bg-zinc-200"></span>
        </span>
      </div>
      <div
        class="pt-8 xl:pt-16 columns-1 lg:columns-2 text-sm md:text-base 2xl:text-lg text-zinc-700"
      >
        <p
          v-for="(description, index) in projectData.descriptions"
          :key="index"
          :class="{ 'mb-4': index < projectData.descriptions.length - 1 }"
        >
          {{ description }}
        </p>
      </div>
    </div>
    <div class="pt-8 xl:pt-16">
      <div>
        <span class="flex items-center">
          <router-link
            to="/projects"
            class="relative max-w-max px-4 py-2 group text-zinc-900"
          >
            <span
              class="absolute inset-0 bg-yellow w-full h-full transition ease-in-out duration-300 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span class="absolute inset-0 border-2 border-zinc-900"></span>
            <span class="relative">Discover More</span>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "../projects.js";

const route = useRoute();

const projectData = computed(() => {
  const id = route.params.projectId;
  return projects.find((project) => project.id === id) || {};
});

function formatLinkText(url) {
  return url.replace(/\/$/, "").replace(/^https?:\/\//, "");
}

function formattedUrl(url) {
  return url.startsWith("http") ? url : `https://${url}`;
}
</script>

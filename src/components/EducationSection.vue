<template>
  <div
    class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 xl:pt-16 relative"
  >
    <div>
      <span class="flex items-center">
        <span class="h-px flex-1 bg-zinc-200"></span>
        <span
          class="pl-6 text-sm md:text-base 2xl:text-lg text-zinc-900 uppercase"
        >
          My Academic Background
        </span>
      </span>
    </div>
    <div class="pt-8 xl:pt-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div
          v-for="(education, index) in educations"
          :key="index"
          class="bg-zinc-100 p-6 sm:p-8 shadow-sm"
        >
          <div class="relative border-s border-zinc-200">
            <div
              class="absolute w-3 h-3 bg-yellow rounded-full mt-[0.4375rem] -start-1.5 z-10"
            ></div>
            <div class="ms-4 relative">
              <time class="text-sm text-yellow font-medium">{{
                education.startYear
              }}</time>
              <div class="mt-3">
                <h3
                  class="text-sm md:text-base 2xl:text-lg text-zinc-900 font-medium flex items-center"
                >
                  <AcademicCapIcon class="mr-2 h-4 w-4" aria-hidden="true" />
                  {{ education.programme }}
                </h3>
                <p
                  class="text-sm md:text-base 2xl:text-lg text-zinc-700 flex items-center"
                >
                  <BookmarkIcon class="mr-2 h-4 w-4" aria-hidden="true" />
                  {{ education.degree }}
                </p>
                <p
                  class="text-sm md:text-base 2xl:text-lg text-zinc-700 flex items-center"
                >
                  <BuildingLibraryIcon
                    class="mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  {{ education.institution }}, {{ education.location }}
                </p>
              </div>
              <p class="my-3 text-sm md:text-base 2xl:text-lg text-zinc-700">
                {{ education.description }}
              </p>
            </div>
            <div
              class="absolute w-3 h-3 bg-yellow rounded-full mt-[0.4375rem] -start-1.5 z-10"
            ></div>
            <div class="ms-4 relative">
              <time class="text-sm text-yellow font-medium">{{
                education.graduationYear
              }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  AcademicCapIcon,
  BookmarkIcon,
  BuildingLibraryIcon,
} from "@heroicons/vue/24/outline";

const educations = [
  {
    startYear: "2016",
    graduationYear: "2021",
    programme: "Hungarian Literary and Cultural Studies",
    degree: "Master with Honours",
    institution: "University of Debrecen",
    location: "Hungary",
    description:
      "During my studies, I cultivated strong research and writing skills, demonstrated through academic achievements such as publications and being awarded first place in a scholarly contest.",
  },
  {
    startYear: "2022",
    graduationYear: "2024",
    programme: "Multimedia Design",
    degree: "Academy Profession",
    institution: "Business Academy SouthWest",
    location: "Denmark",
    description:
      "The programme equipped me with the skills to develop interactive and user-centric digital products. The curriculum combined technical expertise with idea development.",
  },
  {
    startYear: "2024",
    graduationYear: "Present",
    programme: "Web Development",
    degree: "Bachelor (Expected Graduation: 2026)",
    institution: "Business Academy SouthWest",
    location: "Denmark",
    description:
      "Driven by a desire to expand my web dev knowledge, I enrolled in a top-up programme, delving into progressive web app development, database management, and user experience.",
  },
];
</script>

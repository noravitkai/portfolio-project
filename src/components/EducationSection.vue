<template>
  <div
    class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 xl:pt-16"
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
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="bg-zinc-100 p-6 sm:p-8 shadow-sm">
          <div class="relative border-s border-zinc-200">
            <div
              class="absolute w-3 h-3 bg-yellow rounded-full mt-[0.4375rem] -start-1.5"
            ></div>
            <div class="ms-4 relative">
              <time class="text-sm text-yellow font-medium">2019</time>
              <div class="mt-3">
                <h3
                  class="text-sm md:text-base 2xl:text-lg text-zinc-900 font-medium flex items-center"
                >
                  <AcademicCapIcon class="mr-2 h-4 w-4" aria-hidden="true" />
                  Hungarian Literary and Cultural Studies
                </h3>
                <p
                  class="text-sm md:text-base 2xl:text-lg text-zinc-700 flex items-center"
                >
                  <BookmarkIcon class="mr-2 h-4 w-4" aria-hidden="true" />
                  Master with Honours
                </p>
                <p
                  class="text-sm md:text-base 2xl:text-lg text-zinc-700 flex items-center"
                >
                  <BuildingLibraryIcon
                    class="mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  University of Debrecen, Hungary
                </p>
              </div>
              <p class="my-3 text-sm md:text-base 2xl:text-lg text-zinc-700">
                During my studies, I cultivated strong research and writing
                skills, demonstrated through academic achievements such as
                publications and being awarded first place in a scholarly
                contest.
              </p>
            </div>
            <div
              class="absolute w-3 h-3 bg-yellow rounded-full mt-[0.4375rem] -start-1.5"
            ></div>
            <div class="ms-4 relative">
              <time class="text-sm text-yellow font-medium">2021</time>
            </div>
          </div>
        </div>
        <div class="bg-zinc-100 p-6 sm:p-8 shadow-sm">
          <div class="relative border-s border-zinc-200">
            <div
              class="absolute w-3 h-3 bg-yellow rounded-full mt-[0.4375rem] -start-1.5"
            ></div>
            <div class="ms-4 relative">
              <time class="text-sm text-yellow font-medium">2022</time>
              <div class="mt-3">
                <h3
                  class="text-sm md:text-base 2xl:text-lg text-zinc-900 font-medium flex items-center"
                >
                  <AcademicCapIcon class="mr-2 h-4 w-4" aria-hidden="true" />
                  Multimedia Design
                </h3>
                <p
                  class="text-sm md:text-base 2xl:text-lg text-zinc-700 flex items-center"
                >
                  <BookmarkIcon class="mr-2 h-4 w-4" aria-hidden="true" />
                  Academy Profession
                </p>
                <p
                  class="text-sm md:text-base 2xl:text-lg text-zinc-700 flex items-center"
                >
                  <BuildingLibraryIcon
                    class="mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Business Academy SouthWest, Denmark
                </p>
              </div>
              <p class="my-3 text-sm md:text-base 2xl:text-lg text-zinc-700">
                The programme equipped me with the skills to develop a range of
                digital solutions. The curriculum combined technical expertise
                with effective communication abilities.
              </p>
            </div>
            <div
              class="absolute w-3 h-3 bg-yellow rounded-full mt-[0.4375rem] -start-1.5"
            ></div>
            <div class="ms-4 relative">
              <time class="text-sm text-yellow font-medium">2024</time>
            </div>
          </div>
        </div>
        <div class="bg-zinc-100 p-6 sm:p-8 shadow-sm">
          <div class="relative border-s border-zinc-200">
            <div
              class="absolute w-3 h-3 bg-yellow rounded-full mt-[0.4375rem] -start-1.5"
            ></div>
            <div class="ms-4 relative">
              <time class="text-sm text-yellow font-medium">2024</time>
              <div class="mt-3">
                <h3
                  class="text-sm md:text-base 2xl:text-lg text-zinc-900 font-medium flex items-center"
                >
                  <AcademicCapIcon class="mr-2 h-4 w-4" aria-hidden="true" />
                  Web Development
                </h3>
                <p
                  class="text-sm md:text-base 2xl:text-lg text-zinc-700 flex items-center"
                >
                  <BookmarkIcon class="mr-2 h-4 w-4" aria-hidden="true" />
                  Bachelor (Expected Graduation: 2026)
                </p>
                <p
                  class="text-sm md:text-base 2xl:text-lg text-zinc-700 flex items-center"
                >
                  <BuildingLibraryIcon
                    class="mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Business Academy SouthWest, Denmark
                </p>
              </div>
              <p class="my-3 text-sm md:text-base 2xl:text-lg text-zinc-700">
                Driven by a desire to expand my web dev knowledge, I enrolled in
                a top-up programme, delving into progressive web app
                development, database management, and user experience.
              </p>
            </div>
            <div
              class="absolute w-3 h-3 bg-yellow rounded-full mt-[0.4375rem] -start-1.5"
            ></div>
            <div class="ms-4 relative">
              <time class="text-sm text-yellow font-medium">Present</time>
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
</script>

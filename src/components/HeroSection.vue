<template>
  <div
    class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 sm:pt-6 lg:pt-8 xl:pt-16"
  >
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div class="grid place-content-center bg-zinc-100 p-6 sm:p-8">
        <div class="mx-auto max-w-md text-center lg:text-left">
          <header>
            <div class="relative">
              <h1
                class="mb-4 text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-yellow/40 font-extrabold uppercase leading-none"
              >
                Hello
              </h1>
              <h2
                class="absolute inset-x-0 top-2/3 mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-zinc-900 font-extrabold leading-none tracking-tight pl-none lg:pl-1"
              >
                nice to meet you!
              </h2>
            </div>
            <div class="flex flex-col gap-4 text-sm md:text-base 2xl:text-lg">
              <p class="text-zinc-700">
                My name is<span
                  class="font-semibold underline decoration-yellow/40 decoration-4 underline-offset-0"
                >
                  Nora Vitkai.</span
                >
                I am an inventive content creator with a multidisciplinary
                approach to web design and web development.
              </p>
              <a
                href="#contact"
                class="relative max-w-max mx-auto lg:ml-0 px-4 py-2 group text-zinc-900"
              >
                <span
                  class="absolute inset-0 bg-yellow w-full h-full transition ease-in-out duration-300 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
                ></span>
                <span class="absolute inset-0 border-2 border-zinc-900"></span>
                <span class="relative">Contact</span>
              </a>
            </div>
          </header>
        </div>
      </div>
      <div class="lg:col-span-2">
        <ul class="grid grid-cols-2 gap-4">
          <li>
            <a
              href="#profile"
              class="group block overflow-hidden text-sm md:text-base 2xl:text-lg text-zinc-900 hover:text-yellow ease-in-out transition duration-300"
            >
              <img
                src="/src/assets/nora-vitkai-portrait-01.jpg"
                alt=""
                class="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div class="relative bg-white pt-4">
                <a href="#" class="inline-flex items-center">
                  Get to know me
                  <ArrowRightIcon class="ml-1 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              class="group block overflow-hidden text-sm md:text-base 2xl:text-lg text-zinc-900 hover:text-yellow ease-in-out transition duration-300"
            >
              <img
                src="/src/assets/workspace.jpg"
                alt=""
                class="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div class="relative bg-white pt-3">
                <a href="#" class="inline-flex items-center">
                  Check my projects
                  <ArrowRightIcon class="ml-1 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>

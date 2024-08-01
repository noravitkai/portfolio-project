<template>
  <div class="flex h-screen w-16 flex-col justify-between border-e bg-white">
    <div>
      <div class="inline-flex size-16 items-center justify-center">
        <img
          src="/src/assets/nora-vitkai-logo.svg"
          alt="Logo"
          class="size-10 rounded-lg"
        />
      </div>

      <div class="border-t border-zinc-200">
        <div class="px-2">
          <ul class="space-y-1 pt-2">
            <li>
              <a
                href="#"
                class="group relative flex justify-center rounded px-2 py-1.5 text-zinc-950 hover:scale-110 transition ease-out duration-150"
              >
                <IdentificationIcon
                  class="size-6 stroke-1"
                  aria-hidden="true"
                />

                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-xl rounded-tl-none bg-zinc-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  About
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="group relative flex justify-center rounded px-2 py-1.5 text-zinc-950 hover:scale-110 transition ease-out duration-150"
              >
                <AcademicCapIcon class="size-6 stroke-1" aria-hidden="true" />

                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-xl rounded-tl-none bg-zinc-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Skills
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="group relative flex justify-center rounded px-2 py-1.5 text-zinc-950 hover:scale-110 transition ease-out duration-150"
              >
                <BriefcaseIcon class="size-6 stroke-1" aria-hidden="true" />

                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-xl rounded-tl-none bg-zinc-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Experience
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="group relative flex justify-center rounded px-2 py-1.5 text-zinc-950 hover:scale-110 transition ease-out duration-150"
              >
                <ChatBubbleBottomCenterTextIcon
                  class="size-6 stroke-1"
                  aria-hidden="true"
                />

                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-xl rounded-tl-none bg-zinc-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-zinc-200">
      <div class="px-2">
        <ul class="space-y-1 py-2">
          <li>
            <a
              href="mailto:nora.vitkai@outlook.com"
              target="_blank"
              rel="noreferrer"
              class="group relative flex justify-center rounded px-2 py-1.5 text-white hover:scale-110 transition ease-out duration-150"
            >
              <div
                class="bg-zinc-900 rounded-full p-1 flex items-center justify-center"
              >
                <AtSymbolIcon class="size-4 stroke-2" aria-hidden="true" />
              </div>
              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-xl rounded-tl-none bg-zinc-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Mail
              </span>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/vitkainora/"
              target="_blank"
              rel="noreferrer"
              class="group relative flex justify-center rounded px-2 py-1.5 text-white hover:scale-110 transition ease-out duration-150"
            >
              <div
                class="bg-zinc-900 rounded-full p-1 flex items-center justify-center"
              >
                <svg
                  class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-xl rounded-tl-none bg-zinc-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Facebook
              </span>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/nora-vitkai/"
              target="_blank"
              rel="noreferrer"
              class="group relative flex justify-center rounded px-2 py-1.5 text-white hover:scale-110 transition ease-out duration-150"
            >
              <div
                class="bg-zinc-900 rounded-full p-1 flex items-center justify-center"
              >
                <svg
                  class="size-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clip-rule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </div>
              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-xl rounded-tl-none bg-zinc-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                LinkedIn
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  AcademicCapIcon,
  AtSymbolIcon,
  BriefcaseIcon,
  IdentificationIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/vue/24/outline";
</script>

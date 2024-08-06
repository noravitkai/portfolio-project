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
          Contact Me
        </span>
      </span>
    </div>
    <div
      class="pt-8 xl:pt-16 grid grid-cols-1 items-stretch gap-x-4 lg:gap-x-8 gap-y-8 md:grid-flow-row md:grid-cols-2"
    >
      <div>
        <div
          class="flex flex-col gap-8 text-sm md:text-base 2xl:text-lg text-zinc-700"
        >
          <p class="font-medium">
            I would love to hear from you if you have a project in mind.
            <span class="inline-block align-middle">
              <FaceSmileIcon
                class="size-4 align-middle"
                aria-hidden="true"
              ></FaceSmileIcon>
            </span>
          </p>
          <div class="flex flex-col gap-4">
            <p>
              Feel free to reach out directly through one of my contact channels
              below:
            </p>
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <AtSymbolIcon
                  class="size-5 stroke-2 text-yellow"
                  aria-hidden="true"
                ></AtSymbolIcon>
                <a
                  href="mailto:nora.vitkai@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                  class="hover:text-yellow transition ease-out duration-300"
                  >nora.vitkai@outlook.com</a
                >
                <span class="h-px flex-1 bg-zinc-200"></span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="size-5 text-yellow"
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
                <a
                  href="https://www.linkedin.com/in/nora-vitkai/"
                  target="_blank"
                  rel="noreferrer"
                  class="hover:text-yellow transition ease-out duration-300"
                  >linkedin.com/in/nora-vitkai</a
                >
                <span class="h-px flex-1 bg-zinc-200"></span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="size-5 text-yellow"
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
                <a
                  href="https://www.facebook.com/vitkainora/"
                  target="_blank"
                  rel="noreferrer"
                  class="hover:text-yellow transition ease-out duration-300"
                  >facebook.com/vitkainora</a
                >
                <span class="h-px flex-1 bg-zinc-200"></span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <p>
              If you would prefer it, you can also share project details through
              the contact form:
            </p>
            <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-4">
              <div class="grid w-full items-center">
                <label
                  class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
                  for="name"
                  >Full name</label
                >
                <div class="relative flex size-full items-center">
                  <input
                    type="text"
                    name="name"
                    v-model="name"
                    required
                    class="flex size-full min-h-11 border border-zinc-200 bg-white shadow-sm py-2 px-3 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    placeholder="Type your name..."
                  />
                  <span v-if="errors.name" class="text-red-500 text-xs">{{
                    errors.name
                  }}</span>
                </div>
              </div>
              <div class="grid w-full items-center">
                <label
                  class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
                  for="email"
                  >Email address</label
                >
                <div class="relative flex size-full items-center">
                  <input
                    type="email"
                    name="email"
                    v-model="email"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    class="flex size-full min-h-11 border border-zinc-200 bg-white shadow-sm py-2 px-3 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="Type your email address..."
                  />
                  <span v-if="errors.email" class="text-red-500 text-xs">{{
                    errors.email
                  }}</span>
                </div>
              </div>
              <div class="grid w-full items-center">
                <label
                  class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
                  for="message"
                  >Message</label
                ><textarea
                  name="message"
                  v-model="message"
                  required
                  class="flex w-full min-h-[11.25rem] border border-zinc-200 bg-white shadow-sm p-3 placeholder:text-zinc-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto"
                  id="message"
                  placeholder="Type your message..."
                ></textarea>
                <span v-if="errors.message" class="text-red-500 text-xs">{{
                  errors.message
                }}</span>
              </div>
              <div>
                <button
                  type="submit"
                  class="relative max-w-max px-4 py-2 group text-zinc-900"
                >
                  <span
                    class="absolute inset-0 bg-yellow w-full h-full transition ease-in-out duration-300 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
                  ></span>
                  <span
                    class="absolute inset-0 border-2 border-zinc-900"
                  ></span>
                  <span class="relative">Submit</span>
                </button>
              </div>
            </form>
            <div v-if="successMessage" class="text-yellow font-medium mt-4">
              {{ successMessage }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/src/assets/nora-vitkai-portrait-02.jpg"
          alt="Nora Vitkai smiling and enjoying a coffee break"
          class="size-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { AtSymbolIcon, FaceSmileIcon } from "@heroicons/vue/24/outline";

const name = ref("");
const email = ref("");
const message = ref("");
const errors = ref({});
const successMessage = ref("");

const validateForm = () => {
  errors.value = {};

  if (!name.value) {
    errors.value.name =
      "Full name is required. Please provide your full name so I can address you correctly.";
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.value) {
    errors.value.email =
      "Email address is required. Please provide it so I can get back to you.";
  } else if (!emailPattern.test(email.value)) {
    errors.value.email =
      "Please enter a valid email address in the format: example@domain.com.";
  }

  if (!message.value) {
    errors.value.message =
      "Message is required. Please provide some details about your inquiry.";
  }

  return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
  if (validateForm()) {
    fetch("https://www.formbackend.com/f/be68403e9bd86075", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then((response) => {
        if (response.status === 422) {
          throw new Error("Validation error");
        } else if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        successMessage.value =
          "Thank you for your message! I will get back to you as soon as possible.";
      })
      .catch((error) => {
        console.error(`Something went wrong: ${error}`);
      });
  }
};
</script>

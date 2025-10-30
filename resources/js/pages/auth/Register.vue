<script setup lang="ts">
import RegisteredUserController from "@/actions/App/Http/Controllers/Auth/RegisteredUserController";
import InputError from "@/components/InputError.vue";
import { Button } from "@/components/ui/button";
import { Form, Head } from "@inertiajs/vue3";
import { LoaderCircle } from "lucide-vue-next";
</script>

<template>
  <Head title="Register" />

  <div
    class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
  >
    <!-- Background gradien vertikal -->
    <div class="absolute inset-0 bg-[#e84797]"></div>

    <!-- Wave -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="absolute bottom-0 left-0 w-full translate-y-4 sm:translate-y-2 md:-translate-y-8"
    >
      <path
        fill="#e7a0cc"
        fill-opacity="1"
        d="M0,288L80,245.3C160,203,320,117,480,96C640,75,800,117,960,112C1120,107,1280,53,1360,26.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>

    <!-- Card Form -->
    <div
      class="relative z-10 bg-[#203f9a]/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 sm:p-8 w-[90%] max-w-md text-center"
    >
      <!-- Logo -->
      <div class="flex justify-center mb-4 sm:mb-6 p-4">
        <img
          src="/images/logo.png"
          alt="Logo"
          class="w-12 h-12 sm:w-14 sm:h-14 rounded-lg shadow-lg"
        />
      </div>

      <Form
        v-bind="RegisteredUserController.store.form()"
        :reset-on-success="['password', 'password_confirmation']"
        v-slot="{ errors, processing }"
        class="flex flex-col gap-5 sm:gap-6 text-left"
      >
        <!-- Username -->
        <div class="relative">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Username"
            required
            class="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white placeholder:text-white/70 text-sm sm:text-base"
          />
          <InputError :message="errors.name" />
        </div>

        <!-- Email -->
        <div class="relative">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            class="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white placeholder:text-white/70 text-sm sm:text-base"
          />
          <InputError :message="errors.email" />
        </div>

        <!-- Password -->
        <div class="relative">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            class="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white placeholder:text-white/70 text-sm sm:text-base"
          />
          <InputError :message="errors.password" />
        </div>

        <!-- Tombol -->
        <div class="flex justify-center">
          <Button
            type="submit"
            class="w-[200px] sm:w-[240px] bg-white text-[#203f9a] font-semibold rounded-full py-2 mt-4 hover:bg-gray-100 transition"
            :disabled="processing"
          >
            <LoaderCircle
              v-if="processing"
              class="h-4 w-4 animate-spin inline mr-2"
            />
            Register
          </Button>
        </div>
      </Form>
    </div>

    <!-- Footer -->
    <div
      class="absolute bottom-0 left-0 right-0 flex items-center justify-center text-xs sm:text-sm text-[#203f9a] h-10 sm:h-12 bg-gray-100"
    >
      © 2025 Zenith. All rights reserved.
    </div>
  </div>
</template>

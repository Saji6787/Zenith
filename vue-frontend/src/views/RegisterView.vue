<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const email = ref("");
const password = ref("");
const errors = ref({});
const loading = ref(false);

const handleRegister = async () => {
  errors.value = {};
  loading.value = true;

  try {
    const response = await axios.post("http://localhost:8000/api/register", {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    alert(response.data.message);
    // Setelah sukses, bisa arahkan ke login page
    window.location.href = "/login";
  } catch (err) {
    if (err.response?.data?.errors) {
      errors.value = err.response.data.errors;
    } else {
      alert("Terjadi kesalahan saat registrasi.");
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
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
        <!-- <img
          src="/images/logo.png"
          alt="Logo"
          class="w-12 h-12 sm:w-14 sm:h-14 rounded-lg shadow-lg"
        /> -->
      </div>

      <!-- Form -->
      <form @submit.prevent="handleRegister" class="flex flex-col gap-5 sm:gap-6 text-left">
        <div>
          <input
            v-model="name"
            id="name"
            type="text"
            placeholder="Username"
            required
            class="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white placeholder:text-white/70 text-sm sm:text-base"
          />
          <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name[0] }}</p>
        </div>

        <div>
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Email"
            required
            class="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white placeholder:text-white/70 text-sm sm:text-base"
          />
          <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email[0] }}</p>
        </div>

        <div>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Password"
            required
            class="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white placeholder:text-white/70 text-sm sm:text-base"
          />
          <p v-if="errors.password" class="text-red-400 text-xs mt-1">{{ errors.password[0] }}</p>
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="w-[200px] sm:w-[240px] bg-white text-[#203f9a] font-semibold rounded-full py-2 mt-4 hover:bg-gray-100 transition"
            :disabled="loading"
          >
            <span v-if="loading">⏳ Registering...</span>
            <span v-else>Register</span>
          </button>
        </div>
      </form>
    </div>

    <!-- Footer -->
    <div
      class="absolute bottom-0 left-0 right-0 flex items-center justify-center text-xs sm:text-sm text-[#203f9a] h-10 sm:h-12 bg-gray-100"
    >
      © 2025 Zenith. All rights reserved.
    </div>
  </div>
</template>

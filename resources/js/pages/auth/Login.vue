<script setup lang="ts">
import InputError from "@/components/InputError.vue";
import TextLink from "@/components/TextLink.vue";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, Head } from "@inertiajs/vue3";
import { LoaderCircle } from "lucide-vue-next";

const form = useForm({
  email: "",
  password: "",
  remember: false,
});

function submit() {
  form.post("/login");
}

// defineProps<{
//   status?: string;
//   canResetPassword: boolean;
// }>();
</script>

<template>
  <Head title="Login" />

  <div class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
    <!-- Background utama -->
    <div class="absolute inset-0 bg-[#e84797]"></div>

    <!-- Wave di bawah -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute bottom-0 left-0 w-full -translate-y-10 md:-translate-y-6">
      <path
        fill="#e7a0cc"
        fill-opacity="1"
        d="M0,288L80,245.3C160,203,320,117,480,96C640,75,800,117,960,112C1120,107,1280,53,1360,26.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>


    <!-- Card form -->
    <div class="relative z-10 group w-full max-w-sm text-center transition-all duration-300 hover:scale-[1.03]">
      <!-- Lapisan blur -->
      <div class="absolute inset-0 bg-[#203f9a]/10 backdrop-blur-lg rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl"></div>

      <!-- Isi card -->
      <div class="relative z-10 p-8">
        <div class="flex justify-center mb-6 p-5">
          <img src="/images/logo.png" alt="Logo" class="w-14 h-14 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110" />
        </div>

        <form @submit.prevent="submit" class="flex flex-col gap-6 text-left">
          <div class="relative">
            <input id="email" type="email" name="email" placeholder="Email" v-model="form.email" required autofocus class="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white placeholder:text-white/70" />
            <InputError :message="form.errors.email" />
          </div>

          <div class="relative">
            <input id="password" type="password" name="password" placeholder="Password" v-model="form.password" required class="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white placeholder:text-white/70" />
            <InputError :message="form.errors.password" />
          </div>

          <div class="flex items-center justify-between text-white text-sm mt-1">
            <label class="flex items-center space-x-2">
              <Checkbox id="remember" name="remember" v-model="form.remember" class="border-white text-[#203f9a]" />
              <span>Remember me</span>
            </label>

            <!-- <TextLink v-if="canResetPassword" :href="request()" class="text-white underline hover:text-gray-200 transition">
              Forgot password?
            </TextLink> -->
          </div>

          <div class="flex justify-center">
            <Button type="submit" class="w-[240px] bg-white text-[#203f9a] font-semibold rounded-full py-2 mt-6 hover:bg-gray-100 transition" :disabled="form.processing">
              <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin inline mr-2" />
              Log in
            </Button>
          </div>

          <div class="text-center text-white text-sm mt-3">
            Don't have an account?
            <!-- <TextLink :href="register()" class="text-white underline hover:text-gray-200 transition">
              Sign up
            </TextLink> -->
          </div>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <div class="absolute bottom-0 left-0 right-0 flex items-center text-sm text-[#203f9a] h-10 bg-gray-100 justify-center">
      © 2025 Zenith. All rights reserved.
    </div>
  </div>
</template>

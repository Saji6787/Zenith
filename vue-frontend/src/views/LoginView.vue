<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Masuk</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../api/axios";

const email = ref("");
const password = ref("");
const message = ref("");

async function login() {
  try {
    const res = await api.post("/login", {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("token", res.data.access_token);
    message.value = "Login berhasil!";
  } catch (err) {
    message.value = "Email atau password salah.";
  }
}
</script>

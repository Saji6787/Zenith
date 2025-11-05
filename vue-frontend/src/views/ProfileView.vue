<template>
  <div>
    <h2>Profil Pengguna</h2>
    <div v-if="user">
      <p>Nama: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../api/axios";

const user = ref(null);

onMounted(async () => {
  const res = await api.get("/user");
  user.value = res.data;
});

async function logout() {
  await api.post("/logout");
  localStorage.removeItem("token");
  window.location.href = "/login";
}
</script>

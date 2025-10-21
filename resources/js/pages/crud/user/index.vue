<script setup lang="ts">
import { router, usePage } from "@inertiajs/vue3";
import type { User } from "../../../types";


const page = usePage();
const users = page.props.users as User[];

const hapusUser = (id: number) => {
  if (confirm("Yakin ingin menghapus akun ini?")) {
    router.delete(`/dashboard/manage/user/${id}`);
  }
};


</script>

<template>
  <div class="p-6">
    <h1 class="mb-4 text-2xl font-bold">Daftar User</h1>
    <!-- <a
            href="/dashboard/manage/produk/create"
            class="rounded bg-green-600 px-4 py-2 text-white"
            >Tambah Produk</a
        > -->

    <table class="mt-6 w-full border">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Password</th>
          <th>No Telpon</th>
          <th>Alamat</th>
          <th>Role</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>Password</td>
          <td>
            <p v-if="user.no_telpon">{{ user.no_telpon }}</p>
            <p v-else>kosong</p>
          </td>
          <td>
            <p v-if="user.alamat">{{ user.alamat }}</p>
            <p v-else>kosong</p>
          </td>
          <td>{{ user.role }}</td>
          <td>
            <a :href="`/dashboard/manage/user/${user.id}/edit`" class="text-blue-600">Edit</a>
            |
            <button @click="hapusUser(user.id!)" class="text-red-600">
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

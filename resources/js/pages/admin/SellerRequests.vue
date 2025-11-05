<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Inertia } from '@inertiajs/inertia';

interface UserRequest {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'penjual_pending' | 'penjual' | 'admin';
}

const props = defineProps<{
  requests: UserRequest[];
}>();

function approve(userId: number) {
  Inertia.post(`/dashboard/manage/admin/seller-requests/${userId}/approve`);
}
</script>

<template>
  <div>
    <h1>Permintaan Menjadi Penjual</h1>
    <table class="table-auto w-full border">
      <thead>
        <tr>
          <th class="border px-4 py-2">Nama</th>
          <th class="border px-4 py-2">Email</th>
          <th class="border px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in requests" :key="user.id">
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.email }}</td>
          <td class="border px-4 py-2">
            <Button @click="approve(user.id)" class="bg-green-500 text-white">
              Approve
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/vue3";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="p-6">
    <h1 class="mb-6 text-2xl font-bold">Detail User</h1>

    <div class="rounded-lg border p-4 shadow-sm max-w-xl">
      <p class="mb-2"><span class="font-semibold">Nama:</span> {{ user.name }}</p>
      <p class="mb-2"><span class="font-semibold">Email:</span> {{ user.email }}</p>
      <p class="mb-2"><span class="font-semibold">No Telpon:</span> {{ user.no_telpon ?? 'Kosong' }}</p>
      <p class="mb-2"><span class="font-semibold">Alamat:</span> {{ user.alamat ?? 'Kosong' }}</p>
      <p class="mb-2"><span class="font-semibold">Role:</span> {{ user.role }}</p>
    </div>

    <div class="mt-6 flex gap-4">
      <Link
        :href="`/dashboard/manage/user/${user.id}/edit`"
        class="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
      >
        Edit
      </Link>

      <Link
        href="/dashboard/manage/user"
        class="rounded bg-gray-500 px-4 py-2 hover:bg-gray-600"
      >
        Kembali
      </Link>
    </div>
  </div>
</template>

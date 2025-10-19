<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';

const form = ref({
    kategori: '',
    nama_produk: '',
    merek: '',
    harga: 0,
    deskripsi: '',
});

const submit = () => {
    router.post('/dashboard/manage/produk', form.value);
};
</script>

<template>
    <div class="p-6">
        <h1 class="mb-4 text-xl font-bold">Tambah Produk</h1>
        <form @submit.prevent="submit" class="flex w-1/2 flex-col gap-2">
            <input
                v-model="form.kategori"
                placeholder="Kategori"
                class="border p-2"
            />
            <input
                v-model="form.nama_produk"
                placeholder="Nama Produk"
                class="border p-2"
            />
            <input
                v-model="form.merek"
                placeholder="Merek"
                class="border p-2"
            />
            <input
                v-model.number="form.harga"
                placeholder="Harga"
                type="number"
                class="border p-2"
            />
            <textarea
                v-model="form.deskripsi"
                placeholder="Deskripsi"
                class="border p-2"
            ></textarea>
            <button
                type="submit"
                class="rounded bg-blue-600 px-4 py-2 text-white"
            >
                Simpan
            </button>
        </form>
    </div>
</template>

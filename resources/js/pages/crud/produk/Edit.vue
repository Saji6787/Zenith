<script setup lang="ts">
import { router, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import type { Product } from '../../../types';

const page = usePage();
const produk = ref(page.props.produk as Product);

const form = ref({
    kategori: produk.value.kategori,
    nama_produk: produk.value.nama_produk,
    merek: produk.value.merek,
    harga: produk.value.harga,
    deskripsi: produk.value.deskripsi,
});

const submit = () => {
    router.put(
        `/dashboard/manage/produk/${produk.value.id_produk}`,
        form.value,
    );
};
</script>

<template>
    <div class="mx-auto max-w-3xl rounded-lg p-6 shadow">
        <h1 class="mb-4 text-xl font-semibold">Edit Produk</h1>

        <!-- Form produk -->
        <div class="space-y-3">
            <input
                v-model="form.nama_produk"
                placeholder="Nama Produk"
                class="w-full rounded border p-2"
            />
            <input
                v-model="form.kategori"
                placeholder="Kategori"
                class="w-full rounded border p-2"
            />
            <input
                v-model="form.merek"
                placeholder="Merek"
                class="w-full rounded border p-2"
            />
            <textarea
                v-model="form.deskripsi"
                placeholder="Deskripsi"
                class="w-full rounded border p-2"
            ></textarea>
            <input
                v-model="form.harga"
                type="number"
                placeholder="Harga"
                class="w-full rounded border p-2"
            />
        </div>

        <button
            @click="submit"
            type="button"
            class="rounded bg-blue-600 px-4 py-2 text-white"
        >
            Simpan Produk
        </button>
    </div>
</template>

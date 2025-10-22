<script setup lang="ts">
import type { Product, Variant } from '@/types';
import { router, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';

const page = usePage();
const produk = ref(page.props.produk as Product);
const variants: any = page.props.variants as Variant;

const form = ref({
    kategori: produk.value.kategori,
    nama_produk: produk.value.nama_produk,
    merek: produk.value.merek,
    harga: produk.value.harga,
    deskripsi: produk.value.deskripsi,
});

const id = produk.value.id_produk;

const submit = () => {
    router.put(
        `/dashboard/manage/produk/${produk.value.id_produk}`,
        form.value,
    );
};

const hapusVarian = (id: number) => {
    if (confirm('Yakin ingin menghapus produk ini?')) {
        router.delete(`/dashboard/manage/produk/varian/${id}`);
    }
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
        <br />
        <button
            @click="submit"
            type="button"
            class="rounded bg-blue-600 px-4 py-2 text-white"
        >
            Simpan Produk
        </button>
        <br /><br />
        <h2 class="mb-4 text-2xl font-bold">Daftar Varian</h2>
        <a
            :href="`/dashboard/manage/produk/varian/create/${id}`"
            class="rounded bg-green-600 px-4 py-2 text-white"
            >Tambah Varian</a
        >

        <table class="mt-6 w-full border">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Gambar</th>
                    <th>Nama</th>
                    <th>Stok</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in variants" :key="p.id_varian">
                    <td>{{ p.id_varian }}</td>
                    <td>
                        <img :src="`/storage/${p.gambar_varian}`" width="200" />
                    </td>
                    <td>{{ p.nama_varian }}</td>
                    <td>{{ p.stok }}</td>
                    <td>
                        <a
                            :href="`/dashboard/manage/produk/varian/${p.id_varian}/edit`"
                            class="text-blue-600"
                            >Edit</a
                        >
                        |
                        <button
                            @click="hapusVarian(p.id_varian!)"
                            class="text-red-600"
                        >
                            Hapus
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { router, usePage } from '@inertiajs/vue3';
import type { Product } from '../../../types';

const page = usePage();
const products = page.props.products as Product[];

const hapusProduk = (id: number) => {
    if (confirm('Yakin ingin menghapus produk ini?')) {
        router.delete(`/dashboard/manage/produk/${id}`);
    }
};
</script>

<template>
    <div class="p-6">
        <h1 class="mb-4 text-2xl font-bold">Daftar Produk</h1>
        <a
            href="/dashboard/manage/produk/create"
            class="rounded bg-green-600 px-4 py-2 text-white"
            >Tambah Produk</a
        >

        <table class="mt-6 w-full border">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Merek</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in products" :key="p.id_produk">
                    <td>{{ p.id_produk }}</td>
                    <td>{{ p.nama_produk }}</td>
                    <td>{{ p.merek }}</td>
                    <td>{{ p.harga }}</td>
                    <td>
                        <a
                            :href="`/dashboard/manage/produk/${p.id_produk}/edit`"
                            class="text-blue-600"
                            >Edit</a
                        >
                        |
                        <button
                            @click="hapusProduk(p.id_produk!)"
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

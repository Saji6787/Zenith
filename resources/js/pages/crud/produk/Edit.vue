<script setup lang="ts">
import { router, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import type { Product, Variant } from '../../../types';

const page = usePage();
const produk = ref(page.props.produk as Product);

// Form utama produk
const form = ref({
    kategori: produk.value.kategori,
    nama_produk: produk.value.nama_produk,
    merek: produk.value.merek,
    harga: produk.value.harga,
    deskripsi: produk.value.deskripsi ?? '',
});

// Daftar varian
const varians = ref<Variant[]>(produk.value.varians || []);

// Data untuk varian baru
const newVarian = ref<Variant>({
    id_produk: produk.value.id_produk!,
    nama_varian: '',
    stok: 0,
});

// === Fungsi CRUD ===

// Simpan perubahan produk
const updateProduk = () => {
    router.put(
        `/dashboard/manage/produk/${produk.value.id_produk}`,
        form.value,
    );
};

// Tambah varian baru (lokal dulu, bisa dihubungkan dengan endpoint kalau mau langsung ke DB)
const addVarian = () => {
    if (!newVarian.value.nama_varian) return alert('Isi nama varian!');
    const newItem: Variant = {
        ...newVarian.value,
        id_varian: Date.now(), // sementara ID lokal
    };
    varians.value.push(newItem);
    newVarian.value = {
        id_produk: produk.value.id_produk!,
        nama_varian: '',
        stok: 0,
    };
};

// Hapus varian dari daftar
const deleteVarian = (id_varian?: number) => {
    varians.value = varians.value.filter((v: any) => v.id_varian !== id_varian);
};

// Update stok varian (inline)
const updateStok = (v: Variant, event: Event) => {
    const val = parseInt((event.target as HTMLInputElement).value);
    v.stok = isNaN(val) ? 0 : val;
};
</script>

<template>
    <div class="p-6">
        <h1 class="mb-4 text-2xl font-bold">
            Edit Produk: {{ form.nama_produk }}
        </h1>

        <!-- Form Produk -->
        <form
            @submit.prevent="updateProduk"
            class="grid w-3/4 grid-cols-2 gap-3"
        >
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
                class="col-span-2 border p-2"
            ></textarea>

            <div class="col-span-2">
                <button
                    type="submit"
                    class="rounded bg-blue-600 px-4 py-2 text-white"
                >
                    Simpan Perubahan Produk
                </button>
            </div>
        </form>

        <!-- Varian -->
        <h2 class="mt-8 mb-3 text-xl font-bold">Daftar Varian</h2>

        <table class="w-full border">
            <thead>
                <tr>
                    <th>Nama Varian</th>
                    <th>Stok</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="v in varians" :key="v.id_varian">
                    <td>{{ v.nama_varian }}</td>
                    <td>
                        <input
                            type="number"
                            :value="v.stok"
                            class="w-24 border p-1"
                            @input="updateStok(v, $event)"
                        />
                    </td>
                    <td>
                        <button
                            @click="deleteVarian(v.id_varian)"
                            class="text-red-600"
                        >
                            Hapus
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Tambah Varian -->
        <div class="mt-4 w-1/2 border-t pt-4">
            <h3 class="mb-2 font-semibold">Tambah Varian Baru</h3>
            <div class="flex gap-2">
                <input
                    v-model="newVarian.nama_varian"
                    placeholder="Nama Varian"
                    class="flex-1 border p-2"
                />
                <input
                    v-model.number="newVarian.stok"
                    placeholder="Stok"
                    type="number"
                    class="w-32 border p-2"
                />
                <button
                    @click="addVarian"
                    class="rounded bg-green-600 px-3 text-white"
                >
                    Tambah
                </button>
            </div>
        </div>

        <!-- Tombol Simpan Semua -->
        <div class="mt-6">
            <button
                class="rounded bg-purple-600 px-6 py-2 text-white"
                @click="updateProduk"
            >
                Simpan Semua Perubahan
            </button>
        </div>
    </div>
</template>

<style scoped>
table,
th,
td {
    border: 1px solid #ccc;
    border-collapse: collapse;
    padding: 8px;
}
</style>

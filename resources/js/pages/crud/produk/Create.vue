<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';

interface Varian {
    gambar_varian: File | null;
    nama_varian: string;
    stok: number | null;
}

interface ProdukForm {
    nama_produk: string;
    kategori: string;
    deskripsi: string;
    harga: number | null;
    merek: string;
    varians: Varian[];
}

const form = ref({
    kategori: '',
    nama_produk: '',
    merek: '',
    harga: 0,
    deskripsi: '',
    varians: [
        { gambar_varian: null as File | null, nama_varian: '', stok: null },
    ],
});

function onFileChange(event: Event, index: number) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        form.value.varians[index].gambar_varian = target.files[0];
    }
}

function addVarian() {
    form.value.varians.push({
        gambar_varian: null,
        nama_varian: '',
        stok: null,
    });
}

function removeVarian(index: number) {
    form.value.varians.splice(index, 1);
}

const submit = () => {
    const data = new FormData();
    data.append('nama_produk', form.value.nama_produk);
    data.append('kategori', form.value.kategori);
    data.append('deskripsi', form.value.deskripsi);
    data.append('harga', form.value.harga?.toString() || '');
    data.append('merek', form.value.merek);

    form.value.varians.forEach((v, i) => {
        data.append(`varians[${i}][nama_varian]`, v.nama_varian);
        data.append(`varians[${i}][stok]`, String((v as any).stok) || '0');
        if (v.gambar_varian) {
            data.append(`varians[${i}][gambar_varian]`, v.gambar_varian);
        }
    });

    router.post('/dashboard/manage/produk', data, {
        forceFormData: true,
    });
};
</script>

<template>
    <div class="mx-auto max-w-3xl rounded-lg p-6 shadow">
        <h1 class="mb-4 text-xl font-semibold">Tambah Produk</h1>

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

        <hr class="my-5" />

        <!-- Bagian varian -->
        <h2 class="mb-2 text-lg font-semibold">Varian Produk</h2>
        <div
            v-for="(varian, index) in form.varians"
            :key="index"
            class="mb-3 flex flex-col items-start gap-2 rounded-lg border p-3 md:flex-row md:items-center"
        >
            <div class="w-full flex-1 space-y-2">
                <input
                    v-model="varian.nama_varian"
                    placeholder="Nama Varian"
                    class="w-full rounded border p-2"
                />
                <input
                    v-model="varian.stok"
                    type="number"
                    placeholder="Stok"
                    class="w-full rounded border p-2"
                />
                <input
                    type="file"
                    accept="image/*"
                    @change="onFileChange($event, index)"
                />
                <!-- <div v-if="varian.gambar_varian" class="mt-2">
                    <img
                        :src="URL.createObjectURL(varian.gambar_varian)"
                        alt="Preview"
                        class="h-20 rounded border"
                    />
                </div> -->
            </div>
            <button
                @click="removeVarian(index)"
                type="button"
                class="rounded bg-red-500 px-2 py-1 text-white"
            >
                🗑
            </button>
        </div>

        <button
            @click="addVarian"
            type="button"
            class="mt-2 rounded bg-green-500 px-3 py-1 text-white"
        >
            + Tambah Varian
        </button>

        <hr class="my-5" />

        <button
            @click="submit"
            type="button"
            class="rounded bg-blue-600 px-4 py-2 text-white"
        >
            Simpan Produk
        </button>
    </div>
</template>

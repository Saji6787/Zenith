<script setup lang="ts">
import type { Variant } from '@/types';
import { useForm, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';

const page = usePage();
const variant = ref(page.props.variant as Variant);

const form = useForm({
    gambar_varian: null as File | null,
    nama_varian: variant.value.nama_varian,
    stok: variant.value.stok,
});

function onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        form.gambar_varian = target.files[0];
    }
}

const submit = () => {
    form.put(`/dashboard/manage/produk/varian/${variant.value.id_varian}`);
    /* router.put(
        `/dashboard/manage/produk/varian/${variant.value.id_varian}`,
        form.value,
    ); */
};
</script>

<template>
    <div class="mx-auto max-w-3xl rounded-lg p-6 shadow">
        <h1 class="mb-4 text-xl font-semibold">Tambah Produk</h1>

        <!-- Form produk -->
        <div class="space-y-3">
            <input
                v-model="form.nama_varian"
                placeholder="Nama Varian"
                class="w-full rounded border p-2"
            />
            <input
                v-model="form.stok"
                type="number"
                placeholder="Stok"
                class="w-full rounded border p-2"
            />

            <p>Gambar Lama :</p>
            <img :src="`/storage/${variant.gambar_varian}`" width="300" />

            <input
                type="file"
                accept="image/*"
                @change="onFileChange($event)"
            />
        </div>

        <button
            @click="submit"
            type="button"
            class="rounded bg-blue-600 px-4 py-2 text-white"
        >
            Simpan Varian
        </button>
    </div>
</template>

<script setup>
import { useForm, Head, Link } from '@inertiajs/vue3'

const props = defineProps({
  user: Object
})

const form = useForm({
  name: props.user.name || '',
  email: props.user.email || '',
  password: '',
  no_telpon: props.user.no_telpon || '',
  alamat: props.user.alamat || ''
})

function submit() {
  form.put(`/dashboard/manage/user/${props.user.id}`, {
    preserveScroll: true,
    onSuccess: () => alert('User berhasil diubah!'),
    onError: () => alert('Terjadi kesalahan, silakan cek kembali input Anda.')
  })
}
</script>

<template>
  <Head title="Edit User" />

  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-8">
    <div class="w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8">
      <h1 class="text-3xl font-semibold text-white mb-6 text-center">Edit User</h1>

      <form @submit.prevent="submit" class="space-y-5">
        <!-- Nama -->
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-1">Nama</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-blue-400 focus:ring focus:ring-blue-300/20 outline-none"
          />
          <div v-if="form.errors.name" class="text-red-400 text-sm mt-1">{{ form.errors.name }}</div>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-blue-400 focus:ring focus:ring-blue-300/20 outline-none"
          />
          <div v-if="form.errors.email" class="text-red-400 text-sm mt-1">{{ form.errors.email }}</div>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-1">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Isi password baru..."
            class="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-blue-400 focus:ring focus:ring-blue-300/20 outline-none"
          />
          <div v-if="form.errors.password" class="text-red-400 text-sm mt-1">{{ form.errors.password }}</div>
        </div>

        <!-- No Telpon -->
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-1">No Telpon</label>
          <input
            v-model="form.no_telpon"
            type="text"
            class="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-blue-400 focus:ring focus:ring-blue-300/20 outline-none"
          />
          <div v-if="form.errors.no_telpon" class="text-red-400 text-sm mt-1">{{ form.errors.no_telpon }}</div>
        </div>

        <!-- Alamat -->
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-1">Alamat</label>
          <textarea
            v-model="form.alamat"
            rows="3"
            class="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:border-blue-400 focus:ring focus:ring-blue-300/20 outline-none"
          ></textarea>
          <div v-if="form.errors.alamat" class="text-red-400 text-sm mt-1">{{ form.errors.alamat }}</div>
        </div>

        <!-- Tombol -->
        <div class="flex justify-between items-center pt-4">
          <Link
            href="/dashboard/manage/user"
            class="text-gray-300 hover:text-blue-400 transition"
          >
            ← Kembali
          </Link>

          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition disabled:opacity-50"
            :disabled="form.processing"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

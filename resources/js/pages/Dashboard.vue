<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import PlaceholderPattern from '../components/PlaceholderPattern.vue';
import { useForm } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { usePage } from '@inertiajs/vue3';

const page = usePage();
const form = useForm({});

function becomeSeller() {
  form.post('/dashboard/manage/become-seller');
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];
</script>

<template>
  <Head title="Dashboard" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
      <a href="/dashboard/manage/produk" class="rounded bg-green-600 px-4 py-2 text-white">Manage Produk</a>

      <a href="/dashboard/manage/user" class="rounded bg-green-600 px-4 py-2 text-white">Manage User</a>

      <div>
        <p>Halo, {{ page.props.auth.user.name }}!</p>

        <Button v-if="page.props.auth.user.role === 'user'" @click="becomeSeller" class="bg-blue-500 text-white">
          Daftar Menjadi Penjual
        </Button>

        <p v-else-if="page.props.auth.user.role === 'penjual_pending'">
          Permintaan menjadi penjual sedang menunggu konfirmasi admin.
        </p>

        <p v-else-if="page.props.auth.user.role === 'penjual'">
          Anda sudah menjadi penjual.
        </p>

        <a v-else-if="page.props.auth.user.role === 'penjual'" href="/dashboard/manage/user" class="rounded bg-green-600 px-4 py-2 text-white">Manage Toko</a>
      </div>

      <div class="grid auto-rows-min gap-4 md:grid-cols-3">
        <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
          <PlaceholderPattern />
        </div>
        <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
          <PlaceholderPattern />
        </div>
        <div class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
          <PlaceholderPattern />
        </div>
      </div>
      <div class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
        <PlaceholderPattern />
      </div>
    </div>
  </AppLayout>
</template>

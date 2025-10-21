import { InertiaLinkProps } from '@inertiajs/vue3';
import type { LucideIcon } from 'lucide-vue-next';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon;
    isActive?: boolean;
}

export type AppPageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
};

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export type BreadcrumbItemType = BreadcrumbItem;

export interface Variant {
    id_varian?: number;
    id_produk: number;
    nama_varian: string;
    stok: number;
}

export interface Product {
    id_produk?: number;
    kategori: string;
    deskripsi?: string;
    harga: number;
    merek: string;
    nama_produk: string;
    varians?: Varian[];
}

export interface User {
  id: number
  name: string
  email: string
  role: string
  no_telpon?: string | null
  alamat?: string | null
}

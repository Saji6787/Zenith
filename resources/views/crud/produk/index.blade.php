@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Daftar Produk</h2>
        <a href="{{ route('dashboard.manage.produk.create') }}" class="btn btn-primary mb-3">+ Tambah Produk</a>

        @if (session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
        @endif

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Nama Produk</th>
                    <th>Merek</th>
                    <th>Deskripsi</th>
                    <th style="width: 185px">Aksi</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($products as $p)

                    <tr>
                        <td>{{ $p->nama_produk }}</td>
                        <td>{{ $p->merek }}</td>
                        <td>{{ $p->deskripsi }}</td>
                        <td>
                            {{-- <a href="{{ route('dashboard.manage.produk.show', $p) }}"
                                class="btn btn-primary btn-sm">Show</a> --}}
                            <a href="{{ route('dashboard.manage.produk.edit', $p) }}" class="btn btn-warning btn-sm">Edit</a>
                            <form action="{{ route('dashboard.manage.produk.destroy', $p) }}" method="POST"
                                style="display:inline-block;">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-danger btn-sm"
                                    onclick="return confirm('Hapus template ini?')">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
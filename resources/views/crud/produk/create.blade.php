@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Tambah Produk Baru</h2>

        <form action="{{ route('dashboard.manage.produk.store') }}" method="POST" enctype="multipart/form-data">
            @csrf

            <div class="mb-3">
                <label for="nama_produk" class="form-label">Nama Produk</label>
                <input type="text" name="nama_produk" id="nama_produk" class="form-control" required>
                @error('nama_produk') <small class="text-danger">{{ $message }}</small> @enderror
            </div>

            <div class="mb-3">
                <label for="merek" class="form-label">Merek</label>
                <input type="tel" name="merek" id="merek" class="form-control" required>
                @error('merek') <small class="text-danger">{{ $message }}</small> @enderror
            </div>

            <div class="mb-3">
                <label for="deskripsi" class="form-label">Deskripsi</label>
                <textarea name="deskripsi" id="deskripsi" rows="4" class="form-control"></textarea>
                @error('driver') <small class="text-danger">{{ $message }}</small> @enderror
            </div>

            <div class="mb-3">
                <button type="button" id="add-kategori-row" class="btn btn-secondary mb-3">Tambah Kategori</button>

                <div id="kategori-wrapper">
                    <div class="input-group mb-2 kategori-item">
                        <div>
                            <label for="kategori" class="form-label">Lokasi Sewa</label>
                            <select name="kategori[]" id="kategori" class="form-select" required>
                                <option value="">-- Pilih Kategori --</option>
                                @foreach ($kategori as $k)
                                    <option value="{{ $k->id_kategori }}">{{ $k->nama_kategori }}</option>
                                @endforeach
                            </select>
                            @error('kategori') <small class="text-danger">{{ $message }}</small> @enderror
                        </div>

                        <button type="button" class="btn btn-danger remove-kategori-row">Hapus</button>
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <button type="button" id="add-row" class="btn btn-secondary mb-3">Tambah Varian</button>

                <div id="varian-wrapper">
                    <div class="input-group mb-2 varian-item">
                        <div>
                            <label for="gambar_varian" class="form-label">Gambar Varian</label>
                            <input type="file" name="varian[0][gambar_varian]" id="gambar_varian" class="form-control"
                                required>
                            @error('gambar_varian') <small class="text-danger">{{ $message }}</small> @enderror

                            <label for="nama_varian" class="form-label">Nama Varian</label>
                            <input type="text" name="varian[0][nama_varian]" id="nama_varian" class="form-control" required>
                            @error('nama_varian') <small class="text-danger">{{ $message }}</small> @enderror

                            <label for="harga" class="form-label">Harga</label>
                            <input type="number" min="0" name="varian[0][harga]" id="harga" class="form-control" required>
                            @error('harga') <small class="text-danger">{{ $message }}</small> @enderror

                            <label for="stok" class="form-label">Stok</label>
                            <input type="number" min="0" name="varian[0][stok]" id="stok" class="form-control" required>
                            @error('stok') <small class="text-danger">{{ $message }}</small> @enderror
                        </div>

                        <button type="button" class="btn btn-danger remove-row">Hapus</button>
                    </div>
                </div>
            </div>

            <script>
                let index = 1;

                document.getElementById('add-row').addEventListener('click', function () {
                    const wrapper = document.getElementById('varian-wrapper');
                    const newRow = document.createElement('div');
                    newRow.classList.add('input-group', 'mb-2', 'varian-item');
                    newRow.innerHTML = `
                            <div>
                                <label for="gambar_varian" class="form-label">Gambar Varian</label>
                                <input type="file" name="varian[${index}][gambar_varian]" id="gambar_varian" class="form-control"
                                    required>
                                @error('gambar_varian') <small class="text-danger">{{ $message }}</small> @enderror

                                <label for="nama_varian" class="form-label">Nama Varian</label>
                                <input type="text" name="varian[${index}][nama_varian]" id="nama_varian" class="form-control" required>
                                @error('nama_varian') <small class="text-danger">{{ $message }}</small> @enderror

                                <label for="harga" class="form-label">Harga</label>
                                <input type="number" min="0" name="varian[${index}][harga]" id="harga" class="form-control" required>
                                @error('harga') <small class="text-danger">{{ $message }}</small> @enderror

                                <label for="stok" class="form-label">Stok</label>
                                <input type="number" min="0" name="varian[${index}][stok]" id="stok" class="form-control" required>
                                @error('stok') <small class="text-danger">{{ $message }}</small> @enderror
                            </div>

                            <button type="button" class="btn btn-danger remove-row">Hapus</button>
                        `;
                    index++;
                    wrapper.appendChild(newRow);
                });

                document.getElementById('add-kategori-row').addEventListener('click', function () {
                    const wrapper = document.getElementById('kategori-wrapper');
                    const newRow = document.createElement('div');
                    newRow.classList.add('input-group', 'mb-2', 'kategori-item');
                    newRow.innerHTML = `
                            <div>
                                <label for="kategori" class="form-label">Lokasi Sewa</label>
                                <select name="kategori[]" id="kategori" class="form-select" required>
                                    <option value="">-- Pilih Kategori --</option>
                                    @foreach ($kategori as $k)
                                        <option value="{{ $k->id_kategori }}">{{ $k->nama_kategori }}</option>
                                    @endforeach
                                </select>
                                @error('kategori') <small class="text-danger">{{ $message }}</small> @enderror
                            </div>

                            <button type="button" class="btn btn-danger remove-kategori-row">Hapus</button>
                        `;
                    wrapper.appendChild(newRow);
                });

                // Event hapus baris
                document.addEventListener('click', function (e) {
                    if (e.target.classList.contains('remove-row')) {
                        e.target.closest('.varian-item').remove();
                    } else if (e.target.classList.contains('remove-kategori-row')) {
                        e.target.closest('.kategori-item').remove();
                    }
                });
            </script>

            <button type="submit" class="btn btn-success">Simpan</button>
            <a href="{{ route('dashboard.manage.produk.index') }}" class="btn btn-secondary">Kembali</a>
        </form>
    </div>
@endsection
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Variant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VariantController extends Controller
{
    public function create(int $id_produk)
    {
        return Inertia::render('crud/produk/varian/Create', [
            'id_produk' => $id_produk,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_varian' => 'required|string|max:255',
            'stok' => 'required|integer|min:0',
            'gambar_varian' => 'nullable|file|image|max:2048',
        ]);

        $path = '';
        if ($request->hasFile("gambar_varian")) {
            $path = $request->file("gambar_varian")->store('varians', 'public');
        }

        Variant::create([
            'id_produk' => $request['id_produk'],
            'nama_varian' => $validated['nama_varian'],
            'stok' => $validated['stok'],
            'gambar_varian' => $path,
        ]);

        return redirect()->route('dashboard.manage.produk.edit', $request['id_produk'])
            ->with('success', 'Produk dan variannya berhasil disimpan!');
    }

    public function edit(int $id)
    {
        $variant = Variant::findOrFail($id);

        return Inertia::render('crud/produk/varian/Edit', [
            'variant' => $variant
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $variant = Variant::findOrFail($id);

        $validated = $request->validate([
            'nama_varian' => 'required|string|max:255',
            'stok' => 'required|integer|min:0',
        ]);

        if ($request->hasFile("gambar_varian")) {
            $oldImage = 'storage/varians/' . basename($variant->gambar_varian);

            if (file_exists($oldImage))
                unlink($oldImage);

            $path = $request->file("gambar_varian")->store('varians', 'public');

            $variant->update([
                'nama_varian' => $validated['nama_varian'],
                'stok' => $validated['stok'],
                'gambar_varian' => $path,
            ]);
        } else {
            $variant->update([
                'nama_varian' => $validated['nama_varian'],
                'stok' => $validated['stok'],
            ]);
        }

        return redirect()->route('dashboard.manage.produk.edit', $variant->id_produk)
            ->with('success', 'Produk dan variannya berhasil disimpan!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $variant = Variant::findOrFail($id);
        $imagePath = 'storage/varians/' . basename($variant->gambar_varian);

        if (file_exists($imagePath))
            unlink($imagePath);

        $variant->delete();
        return redirect()->back()->with('success', 'Produk dihapus!');
    }
}

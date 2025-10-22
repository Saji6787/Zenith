<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Variant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('variant')->get();
        return Inertia::render('crud/produk/Index', [
            'products' => $products
        ]);
    }

    public function create()
    {
        return Inertia::render('crud/produk/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_produk' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'harga' => 'required|numeric|min:0',
            'merek' => 'required|string|max:255',
            'varians' => 'array|required',
            'varians.*.nama_varian' => 'required|string|max:255',
            'varians.*.stok' => 'required|integer|min:0',
            'varians.*.gambar_varian' => 'nullable|file|image|max:2048',
        ]);

        DB::transaction(function () use ($validated, $request) {
            $produk = Product::create([
                'nama_produk' => $validated['nama_produk'],
                'kategori' => $validated['kategori'],
                'deskripsi' => $validated['deskripsi'] ?? '',
                'harga' => $validated['harga'],
                'merek' => $validated['merek'],
            ]);

            foreach ($validated['varians'] as $i => $varianData) {
                $path = '';
                if ($request->hasFile("varians.$i.gambar_varian")) {
                    $path = $request->file("varians.$i.gambar_varian")->store('varians', 'public');
                }

                $varian = $produk->variant()->create([
                    'nama_varian' => $varianData['nama_varian'],
                    'stok' => $varianData['stok'],
                    'gambar_varian' => $path,
                ]);
            }
        });

        return redirect()->route('dashboard.manage.produk.index')
            ->with('success', 'Produk dan variannya berhasil disimpan!');
    }

    public function edit(int $id)
    {
        $produk = Product::findOrFail($id);
        $variants = Variant::all()->where('id_produk', $id);

        return Inertia::render('crud/produk/Edit', [
            'produk' => $produk->load('variant'),
            'variants' => $variants,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $produk = Product::findOrFail($id);

        $produk->update($request->all());
        return redirect()->route('dashboard.manage.produk.index')->with('success', 'Produk berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $product = Product::with('variant')->find($id);

        foreach ($product->variant as $variant) {
            $imagePath = 'storage/varians/' . basename($variant->gambar_varian);

            if (file_exists($imagePath))
                unlink($imagePath);

            $variant->delete();
        }

        $product->delete();
        return redirect()->back()->with('success', 'Produk dihapus!');
    }
}

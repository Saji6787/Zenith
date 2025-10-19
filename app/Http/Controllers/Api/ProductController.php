<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
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
            'kategori' => 'required|string',
            'nama_produk' => 'required|string',
            'merek' => 'required|string',
            'harga' => 'required|numeric',
            'deskripsi' => 'nullable|string',
        ]);

        Product::create($validated);
        return redirect()->route('dashboard.manage.produk.index')->with('success', 'Produk berhasil ditambahkan!');
    }

    public function edit(int $id)
    {
        $produk = Product::findOrFail($id);

        return Inertia::render('crud/produk/Edit', [
            'produk' => $produk->load('variant')
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
        $product = Product::findOrFail($id);

        $product->delete();
        return redirect()->back()->with('success', 'Produk dihapus!');
    }
}

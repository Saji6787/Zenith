<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\CategoryDetail;
use App\Models\Product;
use App\Models\Variant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use function PHPUnit\Framework\isEmpty;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('variant')->get();
        return view('crud.produk.index', compact('products'));
        return Inertia::render('crud/produk/Index', [
            'products' => $products
        ]);
    }

    public function create()
    {
        $kategori = Category::all();
        return view('crud.produk.create', compact('kategori'));
        return Inertia::render('crud/produk/Create', ['kategori' => Category::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // return;

        $validated = $request->validate([
            'nama_produk' => 'required',
            'deskripsi' => 'nullable|string',
            'merek' => 'required|string',
            'kategori' => 'array|required',
            'varian.*.nama_varian' => 'required|string',
            'varian.*.harga' => 'required|numeric|min:0',
            'varian.*.stok' => 'required|numeric|min:0',
            'varian.*.gambar_varian' => 'required|file|image|max:2048',
        ]);

        DB::transaction(function () use ($validated, $request) {
            $produk = Product::create([
                'nama_produk' => $validated['nama_produk'],
                'deskripsi' => $validated['deskripsi'] ?? '',
                'merek' => $validated['merek'],
            ]);

            foreach ($validated['kategori'] as $k) {
                $produk->categoryDetail()->create([
                    'id_kategori' => $k
                ]);
            }

            foreach ($validated['varian'] as $i => $varianData) {
                $path = '';
                if ($request->hasFile("varian.$i.gambar_varian")) {
                    $path = $request->file("varian.$i.gambar_varian")->store('varians', 'public');
                }

                $produk->variant()->create([
                    'nama_varian' => $varianData['nama_varian'],
                    'harga' => $varianData['harga'],
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
        $produk->load(['variant', 'categoryDetail']);
        $kategori = Category::all();

        return view('crud.produk.edit', compact('produk', 'kategori'));
        return Inertia::render('crud/produk/Edit', [
            'produk' => $produk->load('variant'),
            'variants' => $variants,
            'categories' => $categories,
            'kategori' => Category::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        // dd($request->all());
        // return;
        $produk = Product::findOrFail($id);

        $validated = $request->validate([
            'nama_produk' => 'required',
            'deskripsi' => 'nullable|string',
            'merek' => 'required|string',
            'detail.*.kategori' => 'required',
            'varian.*.nama_varian' => 'required|string',
            'varian.*.harga' => 'required|numeric|min:0',
            'varian.*.stok' => 'required|numeric|min:0',
            'varian.*.gambar_varian' => 'nullable|file|image',
        ]);

        $oldKategoriIds = $produk->categoryDetail()->pluck('id')->toArray();
        $newKategoriIds = collect($request->detail)->pluck('id')->filter()->toArray();
        $katgeoriToDelete = array_diff($oldKategoriIds, $newKategoriIds);

        if (!empty($katgeoriToDelete)) {
            $produk->categoryDetail()->whereIn('id', $katgeoriToDelete)->delete();
        }

        foreach ($request->detail as $d) {
            if (!empty($d['id'])) {
                // Jika ada ID → update
                $detail = $produk->categoryDetail()->find($d['id']);
                if ($detail) {
                    $detail->update([
                        'id_kategori' => $d['kategori']
                    ]);
                }
            } else {
                // Jika tidak ada ID → buat baru
                $produk->categoryDetail()->create([
                    'id_kategori' => $d['kategori']
                ]);
            }
        }

        $oldVarianIds = $produk->variant()->pluck('id_varian')->toArray();
        $newVarianIds = collect($request->varian)->pluck('id_varian')->filter()->toArray();
        $varianToDelete = array_diff($oldVarianIds, $newVarianIds);

        foreach ($varianToDelete as $v) {
            $detail = $produk->variant()->find($v);

            $imagePath = 'storage/varians/' . basename($detail['gambar_varian']);

            if (file_exists($imagePath))
                unlink($imagePath);
        }

        if (!empty($varianToDelete)) {
            $produk->variant()->whereIn('id_varian', $varianToDelete)->delete();
        }

        foreach ($request->varian as $i => $v) {
            if (!empty($v['id_varian'])) {
                // Jika ada ID → update
                $detail = $produk->variant()->find($v['id_varian']);

                $path = $detail['gambar_varian'];
                if ($request->hasFile("varian.$i.gambar_varian")) {
                    $imagePath = 'storage/varians/' . basename($path);

                    if (file_exists($imagePath))
                        unlink($imagePath);

                    $path = $request->file("varian.$i.gambar_varian")->store('varians', 'public');
                }

                if ($detail) {
                    $detail->update([
                        'nama_varian' => $v['nama_varian'],
                        'harga' => $v['harga'],
                        'stok' => $v['stok'],
                        'gambar_varian' => $path,
                    ]);
                }
            } else {
                $path = '';
                if ($request->hasFile("varian.$i.gambar_varian")) {
                    $path = $request->file("varian.$i.gambar_varian")->store('varians', 'public');
                }

                // Jika tidak ada ID → buat baru
                $produk->variant()->create([
                    'nama_varian' => $v['nama_varian'],
                    'harga' => $v['harga'],
                    'stok' => $v['stok'],
                    'gambar_varian' => $path,
                ]);
            }
        }

        $produk->update($request->only('nama_produk', 'merek', 'deskripsi'));
        return redirect()->route('dashboard.manage.produk.index')->with('success', 'Produk berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $product = Product::with('variant', 'categoryDetail')->find($id);

        foreach ($product->categoryDetail as $detail)
            $detail->delete();

        foreach ($product->variant as $variant) {
            $imagePath = 'storage/varians/' . basename($variant->gambar_varian);

            if (file_exists($imagePath) && !isEmpty($variant->gambar_varian))
                unlink($imagePath);

            $variant->delete();
        }

        $product->delete();
        return redirect()->back()->with('success', 'Produk dihapus!');
    }
}

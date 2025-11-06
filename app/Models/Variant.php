<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Variant extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_varian';
    protected $fillable = ['id_produk', 'nama_varian', 'harga', 'stok', 'gambar_varian'];

    public function product()
    {
        return $this->belongsTo(Product::class, 'id_produk', 'id_produk');
    }
}

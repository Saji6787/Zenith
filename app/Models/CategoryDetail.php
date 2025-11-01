<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CategoryDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_produk',
        'id_kategori',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'id_produk');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'id_kategori');
    }
}

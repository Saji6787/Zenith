<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_produk';
    protected $fillable = ['deskripsi', 'merek', 'nama_produk'];

    public function variant()
    {
        return $this->hasMany(Variant::class, 'id_produk', 'id_produk');
    }

    public function categoryDetail()
    {
        return $this->hasMany(CategoryDetail::class, 'id_produk', 'id_produk');
    }
}

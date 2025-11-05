<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\VariantController;
use App\Http\Controllers\Api\UserRoleController;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::prefix('manage')->name('manage.')->group(function () {
        Route::resource('produk', ProductController::class);

        Route::prefix('produk/varian')->name('produk.varian.')->group(function () {
            Route::get('/create/{id_produk}', [VariantController::class, 'create'])->name('create');
            Route::get('/{id_produk}/edit', [VariantController::class, 'edit'])->name('edit');
            Route::post('/', [VariantController::class, 'store'])->name('store');
            Route::put('/{id_produk}', [VariantController::class, 'update'])->name('update');
            Route::delete('/{id_produk}', [VariantController::class, 'destroy'])->name('destroy');
        });

        Route::resource('user', UserController::class);

        // Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

        Route::post('/become-seller', [UserRoleController::class, 'requestSeller'])->name('user.requestSeller');

        // admin halaman konfirmasi
        Route::get('/admin/seller-requests', [UserRoleController::class, 'index'])->middleware('can:is-admin')->name('admin.sellerRequests');
        Route::post('/admin/seller-requests/{user}/approve', [UserRoleController::class, 'approve'])->middleware('can:is-admin')->name('admin.sellerRequests.approve');
    });
});

// Route::middleware('guest')->group(function () {
//     Route::get('/login', [LoginController::class, 'show'])->name('login');
//     Route::post('/login', [LoginController::class, 'store']);
// });

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

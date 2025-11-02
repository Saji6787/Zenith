<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [RegisteredUserController::class, 'store'])->middleware('guest')->name('api.register');

Route::post('/login', [LoginController::class, 'store'])->middleware('guest')->name('api.login');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // TAMBAHKAN RUTE LOGOUT DI DALAM GRUP INI:
    Route::post('/logout', [LoginController::class, 'destroy'])
        ->name('api.logout');
    
    // Nanti rute produk, varian, dll akan masuk di sini juga
});
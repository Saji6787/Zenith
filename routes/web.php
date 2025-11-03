<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('test', function () {
    return 'Test Abdian';
});

Route::get('teste', function () {
    return 'test test';
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

<?php

namespace App\Http\Controllers\Api;

use App\Models\User;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserRoleController extends Controller
{
    public function requestSeller(Request $request)
    {
        $user = $request->user();
        // Ganti role menjadi "penjual_pending" atau simpan di flag khusus
        // misal kita gunakan role sementara "penjual_pending" (opsional)
        $user->update(['role' => 'penjual_pending']);
        return back()->with('success', 'Permintaan menjadi penjual berhasil dikirim.');
    }

    // Admin lihat semua request
    public function index()
    {
        $requests = User::where('role', 'penjual_pending')->get();
        return Inertia::render('admin/SellerRequests', ['requests' => $requests]);
    }

    // Admin approve user menjadi penjual
    public function approve(User $user)
    {
        $user->update(['role' => 'penjual']);
        return back()->with('success', 'User berhasil menjadi penjual.');
    }
}

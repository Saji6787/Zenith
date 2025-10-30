<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return Inertia::render('crud/user/index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Inertia::render('crud/user/edit', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        // $validated = $request->validate([
        //     'name' => 'required|string|max:100|unique:users,name,' . $user->id,
        //     'password' => 'nullable|string|min:8',
        //     'no_telpon' => 'nullable|string|max:20',
        //     'alamat' => 'nullable|string|max:255',
        //     'role' => 'required|in:admin,penjual,user',
        // ]);

        // $validated['password'] = Hash::make($validated['password']);

        // $user->update($validated);

        // return redirect()->route('dashboard.manage.user.index')->with('success', 'User berhasil diubah');

        $request->validate([
            'role' => 'required|in:admin,penjual,user',
        ]);

        $user->update([
            'role' => $request->role,
        ]);

        return back()->with('success', 'Role user berhasil diubah!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $user = User::findOrFail($id);

        $user->delete();
        return redirect()->back()->with('success', 'Users dihapus!');
    }
}

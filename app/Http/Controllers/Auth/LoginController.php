<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\JsonResponse;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function show()
    {
        // Render halaman login pakai Inertia
        return Inertia::render('auth/Login');
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        if (!Auth::attempt($credentials, $request->boolean('remember'))) {
            throw ValidationException::withMessages([
                'email' => __('auth.failed'), // Ini sudah bagus, akan jadi JSON error
            ]); //
        }

        // $request->session()->regenerate();

        // return redirect()->intended('/dashboard');

        $user = User::where('email', $request->email)->firstOrFail();

        // 3. Buat API Token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login berhasil!',
            'user' => $user,
            'token_type' => 'Bearer',
            'access_token' => $token,
        ]);


    }

    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');

    //     $request->user()->currentAccessToken()->delete();

    //     return response()->json([
    //         'message' => 'Anda telah berhasil logout.'
    //     ]);
    }
}

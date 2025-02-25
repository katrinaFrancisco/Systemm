<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        \Log::info("Incoming request:", $request->all());

        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'username' => 'required|string|unique:users|max:255',
            'email' => 'required|string|email|unique:users|max:255',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            \Log::error("Validation Errors: " . json_encode($validator->errors()));
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 400);
        }

        try {
            \Log::info("Incoming Email: " . $request->email);

            // Extract domain from email
            $domain = substr(strrchr($request->email, "@"), 1);

            // Assign role based on domain
            $roleType = ($domain === "gmail.com") ? "user" : "user"; 

            \Log::info("Assigned Role: " . $roleType);

            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role_type' => $roleType,
            ]);

            \Log::info("User Created Successfully: ", $user->toArray());

            return response()->json([
                'message' => 'User registered successfully!',
                'user' => $user
            ], 201);
        } catch (\Exception $e) {
            \Log::error("Registration Error: " . $e->getMessage());
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'Login successful']);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }
}

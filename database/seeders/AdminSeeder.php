<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Check if an admin user already exists
        $adminExists = User::where('username', 'admin')->exists();

        if (!$adminExists) {
            $userCreate = User::create([
                'username' => 'admin',
                'email' => 'nvrsoleo@admin.com',
                'password' => Hash::make('Admin123!'), // Change this to a secure password
                'role' => 'admin',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}

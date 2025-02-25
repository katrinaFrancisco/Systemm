<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Check if an admin user already exists
        $adminExists = DB::table('users')->where('username', 'admin')->exists();

        if (!$adminExists) {
            DB::table('users')->insert([
                'first_name' => 'Admin',
                'last_name' => 'User',
                'username' => 'admin',
                'email' => 'nvrsoleo@admin.com',
                'password' => Hash::make('adminuser1122'), // Change this to a secure password
                'role' => 'admin',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}

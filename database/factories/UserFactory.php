<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

//RELLENA USUARIOS RANDOM
$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->firstName,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => null,
        'zip_code' => $faker->randomElement(['28760', '28791', '28880', '28909', '28028', '28042', '28070', '28410', '28439', '28420', '28529', '28694', '28741', '08025', '08160', '08180', '08205', '08212', '08517', '08730', '08912', '08950', '08980']),
        'image' => 'images/retagers/modelo'.rand(1, 4).'.jpg',
        'active' => true,
    ];
});

<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

//RELLENA DE FORMA RANDOM LOS CAMPOS DEL PRODUCTO, SE HAN AÑADIDO PUNTO Y DENIM A ALGUNOS PARA PROBAR FILTROS
$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' =>  (rand(0, 6) == 4) ? 'Punto. ' . $faker->word : $faker->word,
        'description' => (rand(0, 6) == 3) ? 'Denim. ' . $faker->text : $faker->text,
        'size' => $faker->randomDigit,
        'price' => $faker->randomNumber(2),
    ];
});

<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Image;
use Faker\Generator as Faker;

//HACE UN RANDOM DE LAS IMÁGENES DE LA CARPETA PRODUCT
$factory->define(Image::class, function (Faker $faker) {
    return [
        'name' => 'images/productos/product-'.rand(1, 9).'.jpg',
    ];
});

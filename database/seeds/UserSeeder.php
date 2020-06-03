<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

     //SE CREAN 500 USUARIOS CON 2 PRODUCTOS CON 4 FOTOS CADA UNO EN BASE A LOS FAKERS
    public function run()
    {
        factory(App\User::class, 500)->create()->each(function ($user) {
            $user->products()->saveMany(factory(App\Product::class, 2)->make())
                ->each(
                    function ($product) {
                        $product->images()->saveMany(factory(App\Image::class, 4)->make());
                    }
                );
        });

        $favorites = App\User::all();

        App\User::all()->each(function ($user) use ($favorites) { 
            $user->favorites()->attach(
                $favorites->random(rand(1, 100))->pluck('id')->toArray()
            ); 
        });
    }
}

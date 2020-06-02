<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    protected $fillable = [
        'name',
        'description',
        'size',
        'price',
        'user_id',
    ];

    /**
     * 
     *
     * RELACIONES DEL MODELO PRODUCT
     * 
     */

    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function images()
    {
        return $this->hasMany('App\Image');
    }
}

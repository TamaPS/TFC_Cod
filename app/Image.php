<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'name',
    ];

    /**
     * 
     *
     * RELACIONES DEL MODELO IMAGE
     * 
     */

    public function product()
    {
        return $this->belongsTo('App\Product');
    }
}

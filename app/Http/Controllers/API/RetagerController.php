<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use App\Http\Resources\User as UserResources;

class RetagerController extends Controller
{
    public function index(Request $request)
    {
        //COMPRUEBA SI MUESTRA TODOS O POR ZIP_CODE
        if (is_null($request->zip_code)) {
            $zip_code = '%';
        } else {
            $zip_code = $request->zip_code;
        }

        return UserResources::collection(
            User::select('id', 'name', 'zip_code', 'image')
                ->where('active', 1)
                ->where('zip_code', 'like', $zip_code)
                ->orderBy('created_at', 'desc')
                ->has('products', '>=', 1)
                ->withCount('likedBy')
                ->paginate(15)
        );
    }

    //MÉTODO PARA MOSTRAR 10 RETAGERS POR ORDEN DE LIKES
    public function top(Request $request)
    {
        $tops = UserResources::collection(
            User::select('id', 'name', 'zip_code', 'image')
                ->where('active', 1)
                ->has('products', '>', 1)
                ->withCount('likedBy')
                ->orderBy('liked_by_count', 'desc')
                ->take(10)->get()
        );

        return $tops;
    }
}

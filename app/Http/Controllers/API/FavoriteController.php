<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
class FavoriteController extends Controller
{
    public function store(Request $request)
    {
        $user = Auth::user();

        $user_favorite = User::find($request->id);

        if ($user) {
            $user->favorites()->toggle($user_favorite);
            return response()->json(['success' => 'Favorito modificado.'], 201);
        }

        return response()->json(['error' => 'Usuario no autenticado.'], 403);
    }
}

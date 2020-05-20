<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Http\Resources\User as UserResources;

class FavoriteController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

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

    public function index(Request $request)
    {
        $user = Auth::user();
        if ($user) {
            return UserResources::collection(
                $user->favorites()->select('id', 'name', 'zip_code', 'image')
                    ->where('active', 1)
                    ->orderBy('name')
                    ->paginate(15)
            );
        }
        return response()->json(['error' => 'Usuario no autenticado.'], 403);
    }
}

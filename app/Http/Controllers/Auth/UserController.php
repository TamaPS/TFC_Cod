<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function __construct()
    {
        //MIDDLEWARE PARA USUARIOS AUTENTICADOS
        $this->middleware('auth');
    }

    public function show(Request $request)
    {
        return $request->user();
    }

    //CAMPOS DE EDITAR PERFIL DE LA PRIMERA PESTAÑA
    public function updateData(Request $request)
    {
        $user = Auth::user();
        $this->validator($request->all(), $user)->validate();
        $user->name = $request->name;
        $user->zip_code = $request->zip_code;
        $user->save();
        return $user;
    }

    //CAMPOS DE EDITAR PERFIL DE LA SEGUNDA PESTAÑA
    public function updatePassword(Request $request)
    {
        $user = Auth::user();
        $this->validator($request->all(), $user)->validate();
        $user->password = Hash::make($request->password);
        $user->save();
        return $user;
    }

    //CAMPOS DE EDITAR PERFIL DE LA TERCERA PESTAÑA
    public function updateImage(Request $request)
    {
        $user = Auth::user();

        $image = $request['image'];
        $image = str_replace('data:image/png;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $imageName = 'avatars/' . $user->name . Str::random(4) . '.png';
        Storage::put('public/' . $imageName, base64_decode($image));

        $user->image = 'storage/' . $imageName;
        $user->save();
        return $user;
    }

    //VALIDACIÓN DE CAMPOS DE USUARIO
    protected function validator(array $data, User $user)
    {
        return Validator::make($data, [
            'name' => ['string', 'max:20', 'unique:users,name,' . $user->id],
            'password' => ['string', 'min:8', 'confirmed'],
            'zip_code' => ['string', 'min:5', 'max:5'],
        ]);
    }


    //COMPROBACIÓN DE DISPONIBILIDAD DE NOMBRE (EL EMAIL NO SE EDITA)
    protected function checkName(Request $request)
    {
        if ($request["name"] != $request->user()->name) {
            if (User::where('name', '=', $request["name"])->exists()) {
                return response()->json(['message' => 'Ya existe un Retager con este nombre.'], 404);
            }
        }

        return response()->json(['message' => 'Bien.'], 201);
    }
}

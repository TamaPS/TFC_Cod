<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Response;
use App\Notifications\AccountActivation;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        if ($response = $this->registered($request, $user)) {
            return $response;
        }

        $user->notify(new AccountActivation($user));

        return $request->wantsJson()
                    ? new Response('', 201)
                    : redirect($this->redirectPath());
    }

    protected function registered(Request $request, $user)
    {
        //
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:30', 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'zip_code' => ['required', 'string', 'min:5', 'max:5'],
            'image' => ['required'],
        ]);
    }

    protected function create(array $data)
    {
        $image = $data['image'];
        $image = str_replace('data:image/png;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $imageName = 'avatars/' . $data['name'] . '.png';
        Storage::put($imageName, base64_decode($image));

        $random = Str::random(40);

        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'zip_code' => $data['zip_code'],
            'remember_token' => sha1($data['email'].$random),
            'image' => $imageName,
        ]);
    }
    
    protected function checkName(Request $request)
    {
        if (User::where('name', '=', $request["name"])->exists()) {
            return response()->json(['message' => 'Ya existe un Retager con este nombre.'], 404);
        }
    }

    protected function checkEmail(Request $request)
    {
        if (User::where('email', '=', $request["email"])->exists()) {
            return response()->json(['message' => 'Ya existe un Retager con este email.'], 404);
        }
    }
}

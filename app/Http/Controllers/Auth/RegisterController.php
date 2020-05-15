<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
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
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    //use RegistersUsers;

    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        if ($response = $this->registered($request, $user)) {
            return $response;
        }

        //$invoice['id']= $user->id;

        $user->notify(new AccountActivation($user));

        return $request->wantsJson()
                    ? new Response('', 201)
                    : redirect($this->redirectPath());
    }

    protected function registered(Request $request, $user)
    {
        //
    }

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
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

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
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

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Notifications\SendPassword;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
class ForgotPasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }

    public function sendPassword(Request $request)
    {
        $this->validator($request->all())->validate();

        $user = User::where('email', $request->email)->first();
        $password = Str::random(4).rand(1000,9999);

        if($user){
            $user->password = Hash::make($password);
            $user->save();
            $user->notify(new SendPassword($password));
            return response()->json([
                'success' => 'verificado',
            ], 201);
        }

        return response()->json([
            'error' => 'no verificado',
        ], 403);
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);
    }
}

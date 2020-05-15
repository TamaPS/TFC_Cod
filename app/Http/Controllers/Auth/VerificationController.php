<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class VerificationController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }

    public function verify(Request $request)
    {
        $token = substr($request->token, 7);
        $user = User::where('remember_token', $token)->first();

        if($user){
            $user->email_verified_at = now();
            $user->remember_token = null;
            $user->active = true;
            $user->save();
            return response()->json([
                'success' => 'verificado',
            ], 201);
        }

        return response()->json([
            'error' => 'no verificado',
        ], 403);
    }
}

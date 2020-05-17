<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class RetagerController extends Controller
{
    public function index()
    {
        return response()->json(User::select('id', 'name', 'zip_code', 'image')->where('active', 1)->paginate(15), 201);
    }
}

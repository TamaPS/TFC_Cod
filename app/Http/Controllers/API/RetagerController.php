<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class RetagerController extends Controller
{
    public function index(Request $request)
    {
        if (is_null($request->zip_code)) {
            $zip_code = '%';
        } else {
            $zip_code = $request->zip_code;
        }
        return response()->json(User::select('id', 'name', 'zip_code', 'image')
            ->where('active', 1)
            ->where('zip_code', 'like', $zip_code)
            ->paginate(15), 201);
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use App\Http\Resources\User as UserResources;
use App\Http\Resources\UserCollection;

class RetagerController extends Controller
{
    public function index(Request $request)
    {
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
                ->paginate(15)
        );
    }

    public function top(Request $request)
    {
        $tops = UserResources::collection(
            User::select('id', 'name', 'zip_code', 'image')
                ->where('active', 1)
                ->inRandomOrder()
                ->get()
        );

        $topsJson = $tops->toJson();

        $topsArray = json_decode($topsJson, true);

        $top = array();
        foreach ($topsArray as $key => $row) {
            $top[$key] = $row['count_favorites'];
        }
        array_multisort($top, SORT_DESC, $topsArray);

        $topTen = array_slice($topsArray, 0, 10);

        return $topTen;
    }
}

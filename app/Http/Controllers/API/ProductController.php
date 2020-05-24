<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Resources\Product as ProductResources;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Product::query();

        if ($request->filters) {
            foreach ($request->filters as $key => $filter) {
                switch ($key) {
                    case 'price':
                        if ($filter != '') {
                            $query->where($key, '<=', $filter);
                        }
                        break;
                    case 'user_id':
                        if ($filter != '') {
                            $query->where($key, '=', $filter);
                        }
                        break;
                    default:
                        if ($filter != '') {
                            $query->orWhere($key, 'like', '%' . $filter . '%');
                        }
                        break;
                }
            }
        }

        $query->orderBy('price', 'asc');

        return ProductResources::collection(
            $query->paginate(15)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ProductResources(Product::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

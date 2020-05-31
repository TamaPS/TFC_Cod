<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Resources\Product as ProductResources;
use App\Image;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

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
        $data = Arr::only(
            $request->all(),
            [
                'name',
                'description',
                'size',
                'price',
                'images',
            ]
        );

        $this->validator($data)->validate();

        DB::beginTransaction();

        try {
            $user = Auth::user();
            $product = $user->products()->create([
                'name' => $data['name'],
                'description' => $data['description'],
                'size' => $data['size'],
                'price' => $data['price'],
            ]);

            foreach ($data['images'] as $index => $image) {
                $image = str_replace('data:image/png;base64,', '', $image);
                $image = str_replace(' ', '+', $image);
                $imageName = 'products/' . $product->id . '_' . md5(microtime()) . '.png';
                Storage::put('public/' . $imageName, base64_decode($image));
                $product->images()->create([
                    'name' => 'storage/' . $imageName,
                ]);
            }

            DB::commit();
            return response()->json(['success' => 'Producto "' . $data['name'] . '" añadido con éxito.'], 201);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e], 404);
        }
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
    public function update(Request $request)
    {
        $user = Auth::user();
        $productData = $request->all();
        $product = Product::find($productData['id']);

        if ($user->id != $product->user_id) {
            return response()->json(['error' => 'No estas autorizado.'], 401);
        }

        $data = Arr::only(
            $productData,
            [
                'name',
                'description',
                'size',
                'price',
                'images',
            ]
        );

        $this->validator($data)->validate();

        DB::beginTransaction();

        try {

            $product->fill($productData);
            $user->products()->save($product);

            $images = $product->images()->get()->pluck('name');
            $product->images()->delete();

            foreach ($data['images'] as $index => $image) {
                if (strpos($image, 'image/png;base64')) {
                    $image = str_replace('data:image/png;base64,', '', $image);
                    $image = str_replace(' ', '+', $image);
                    $imageName = 'products/' . $product->id . '_' . md5(microtime()) . '.png';
                    Storage::put('public/' . $imageName, base64_decode($image));
                    $data['images'][$index] = 'storage/' . $imageName;
                }
                $product->images()->save(new Image(['name' => $data['images'][$index]]));
            }

            $imagesDelete = array_diff($images->toArray(), $data['images']);

            foreach ($imagesDelete as $index => $image) {
                $imageName = str_replace('storage/', 'public/', $image);
                if (Storage::exists($imageName)) {
                    Storage::delete($imageName);
                }
            }

            DB::commit();
            return response()->json(['success' => 'Producto "' . $data['name'] . '" editado con éxito.'], 201);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = Auth::user();
        $product = Product::find($id);

        if ($user->id != $product->user_id) {
            return response()->json(['error' => 'No estas autorizado.'], 401);
        }

        DB::beginTransaction();

        try {
            $images = $product->images()->get()->pluck('name');

            $product->delete();

            foreach ($images as $index => $image) {
                $imageName = str_replace('storage/', 'public/', $image);
                if (Storage::exists($imageName)) {
                    Storage::delete($imageName);
                }
            }

            DB::commit();
            return response()->json(['success' => 'Producto eliminado con éxito.'], 201);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json(
                [
                    'error' => 'No se ha podido eliminar el producto.',
                    'errorDetalles' => 'Error:(' . $e . ').'
                ],
                404
            );
        }
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:30'],
            'description' => ['required', 'string', 'max:500'],
            'size' => ['required', 'string', 'max:100'],
            'price' => ['required', 'numeric'],
            'images' => ['required', 'array', 'min:1'],
            'images.*' => ['required', 'string'],
        ]);
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Notifications\Contact;
use Illuminate\Support\Facades\Validator;
use App\Product;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    public function __construct()
    {
        //PARA UTILIZAR LOS MÉTODOS DE ESTE CONTROLADOR DEBES ESTAR AUTENTICADO
        $this->middleware('auth');
    }
 
    //MÉTODO PARA CONTACTAR CON EL RETAGER
    public function send(Request $request)
    {
        $this->validator($request->all())->validate();

        $product = Product::find($request->product_id);
        $user_to = Product::find($request->product_id)->user()->first();
        $user_from = Auth::user();
        $message = $request->message;
        $user_to->notify(new Contact($product, $user_from, $message));

        return response()->json(['success' => 'Mensaje enviado correctamente.'], 201);
    }

    //MÉTODO PARA VALIDAR QUE EL MENSAJE EXISTA Y SEA STRING
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'message' => ['required', 'string'],
        ]);
    }
}

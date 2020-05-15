<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout');
Route::post('/register', 'Auth\RegisterController@register');
Route::post('/register/name', 'Auth\RegisterController@checkName');
Route::post('/register/email', 'Auth\RegisterController@checkEmail');
Route::post('/account-activation', 'Auth\VerificationController@verify');
Route::post('/password-email', 'Auth\ForgotPasswordController@sendPassword');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::apiResource('/products', 'API\ProductController');
Route::get('/products', 'API\ProductController@index');
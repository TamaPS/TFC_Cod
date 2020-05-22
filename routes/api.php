<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', 'Auth\LoginController@login')->middleware('guest');
Route::post('/register', 'Auth\RegisterController@register')->middleware('guest');
Route::post('/register/name', 'Auth\RegisterController@checkName')->middleware('guest');
Route::post('/register/email', 'Auth\RegisterController@checkEmail')->middleware('guest');
Route::post('/account-activation', 'Auth\VerificationController@verify')->middleware('guest');
Route::post('/password-email', 'Auth\ForgotPasswordController@sendPassword')->middleware('guest');

Route::post('/logout', 'Auth\LoginController@logout');
Route::middleware('auth:sanctum')->get('/user', 'Auth\UserController@show');
Route::middleware('auth:sanctum')->put('/user/edit/data', 'Auth\UserController@updateData');
Route::middleware('auth:sanctum')->put('/user/edit/password', 'Auth\UserController@updatePassword');
Route::middleware('auth:sanctum')->put('/user/edit/image', 'Auth\UserController@updateImage');
Route::middleware('auth:sanctum')->post('/user/name', 'Auth\UserController@checkName');


//Route::apiResource('/products', 'API\ProductController');
Route::post('/products', 'API\ProductController@index');
Route::get('/retagers', 'API\RetagerController@index');
Route::get('/tops', 'API\RetagerController@top');
Route::middleware('auth:sanctum')->get('/favorites', 'API\FavoriteController@index');
Route::middleware('auth:sanctum')->post('/favorites', 'API\FavoriteController@store');

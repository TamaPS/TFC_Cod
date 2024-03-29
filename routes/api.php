<?php

use Illuminate\Support\Facades\Route;

Route::post('/login', 'Auth\LoginController@login')->middleware('guest');
Route::post('/logout', 'Auth\LoginController@logout');

Route::post('/register', 'Auth\RegisterController@register')->middleware('guest');
Route::post('/register/name', 'Auth\RegisterController@checkName')->middleware('guest');
Route::post('/register/email', 'Auth\RegisterController@checkEmail')->middleware('guest');

Route::post('/account-activation', 'Auth\VerificationController@verify')->middleware('guest');

Route::post('/password-email', 'Auth\ForgotPasswordController@sendPassword')->middleware('guest');

Route::middleware('auth:sanctum')->get('/user', 'Auth\UserController@show');
Route::middleware('auth:sanctum')->put('/user/edit/data', 'Auth\UserController@updateData');
Route::middleware('auth:sanctum')->put('/user/edit/password', 'Auth\UserController@updatePassword');
Route::middleware('auth:sanctum')->put('/user/edit/image', 'Auth\UserController@updateImage');
Route::middleware('auth:sanctum')->post('/user/name', 'Auth\UserController@checkName');
Route::middleware('auth:sanctum')->delete('/user/delete/{id}/{email}', 'Auth\UserController@destroy');

Route::middleware('auth:sanctum')->post('/contact', 'API\ContactController@send');

Route::post('/products', 'API\ProductController@index');
Route::get('/product/{id}', 'API\ProductController@show');
Route::middleware('auth:sanctum')->post('/product', 'API\ProductController@store');
Route::middleware('auth:sanctum')->put('/product/edit', 'API\ProductController@update');
Route::middleware('auth:sanctum')->delete('/product/delete/{id}', 'API\ProductController@destroy');

Route::get('/retagers', 'API\RetagerController@index');
Route::get('/tops', 'API\RetagerController@top');

Route::middleware('auth:sanctum')->get('/favorites', 'API\FavoriteController@index');
Route::middleware('auth:sanctum')->post('/favorites', 'API\FavoriteController@store');

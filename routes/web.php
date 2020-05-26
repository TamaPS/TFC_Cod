<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'index');
Route::view('/retagers', 'index');
Route::view('/retagers-cerca', 'index');
Route::view('/retagers-top', 'index');
Route::view('/productos', 'index');
Route::view('/productos-denim', 'index');
Route::view('/productos-punto', 'index');
Route::view('/productos-menos10', 'index');
Route::view('/productos-retager', 'index');
Route::view('/nuevo-producto', 'index');
Route::view('/busqueda', 'index');
Route::view('/producto', 'index');
Route::view('/favorites', 'index');
Route::view('/register', 'index')->middleware('guest');
Route::view('/account-activation', 'index')->middleware('guest');
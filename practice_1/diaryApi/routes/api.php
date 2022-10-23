<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\DiaryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::apiResource('diaries', 'API\DiaryController');
Route::get('/diaries', [DiaryController::class, 'index']);
Route::get('/diaries/show/{id}', [DiaryController::class, 'show']);
Route::put('/diaries/update/{id}', [DiaryController::class, 'update']);


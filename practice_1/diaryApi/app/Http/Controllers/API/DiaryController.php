<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Diary;

class DiaryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $diaries = Diary::get()->toJson(JSON_PRETTY_PRINT);
        return response($diaries, 200);
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
        if (Diary::where('id', $id)->exists()) {
            $diary = Diary::find($id)->toJson(JSON_PRETTY_PRINT);
            return response($diary, 200);
          } else {
            return response()->json([
              "message" => "Diary not found"
            ], 404);
          }
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
        if (Diary::where('id', $id)->exists()) {
            $diary = Diary::find($id);
            $diary->weather = $request->weather;
            $diary->manager = $request->manager;
            $diary->sleep_time = $request->sleep_time;
            $diary->start = $request->start;
            $diary->end = $request->end;
            $diary->comment = $request->comment;
            $diary->save();
      
            return response()->json([
                "message" => "records updated successfully"
            ], 200);
            } else {
            return response()->json([
                "message" => "diary not found"
            ], 404);
              
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
        //
    }
}

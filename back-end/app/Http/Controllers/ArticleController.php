<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
	{
		$articles = Article::all();
		return response()->json($articles);
	}

	public function show($id)
	{
		$article = Article::create();
		return response()->json($article);
	}

	public function store(Request $request)
	{
		$article = Article::create($request->all());
		return response()->json($article, 201);
	}
	
    public function update(Request $request, $id)
    {
        $article = Article::find($id);
        $article->update($request->all());
        return response()->json($article, 200);
    }

	public function destroy($id)
	{
		Article::destroy($id);
		return response()->json(null, 204);
	}
}

import React, { useState, useEffect} from "react";
import ArticleList from "./ArticleList"


function NewsHome({ searchArticles, articles, onAddToFavorites }){
   
    
   
    return(
        <ArticleList articles={articles} searchArticles={searchArticles} onAddToFavorites={onAddToFavorites} />

    );
}

export default NewsHome
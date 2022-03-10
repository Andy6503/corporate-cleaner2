import React from "react";
import ArticleList from "./ArticleList"


function NewsHome({ searchArticles, articles, onAddToFavorites }){
   
    
   
    return(
        <>
            <h2>Lastest News </h2>
            <ArticleList articles={articles} searchArticles={searchArticles} onAddToFavorites={onAddToFavorites} />
        </>
    );
}

export default NewsHome
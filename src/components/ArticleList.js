import React from "react";
import ArticleCard from "./ArticleCard"

function ArticleList({ articles, searchArticles, onAddToFavorites }){

    
   
    const articleItems = articles.map((article) => {
        return <ArticleCard key={article.title} article={article} onAdd={onAddToFavorites} />
    })
    const searchArticleItems = searchArticles.map((searchArticle) => {
        return <ArticleCard key={searchArticle.title} article={searchArticle} onAdd={onAddToFavorites} />
    })

    //console.log(searchArticles)
    return(
        <div>{searchArticles.length !== 0 ? searchArticleItems : articleItems}</div>
        //make sure to check this ^
    )
}

export default ArticleList;
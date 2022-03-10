import React from "react";
import FavoritesArticleCard from "./FavortiesArticleCard";

function Favorites({ favList, onRemoveFromFavorites}){
    const favoriteItems = favList.map((article) => {
        return <FavoritesArticleCard key={article.title} article={article} onRemove={onRemoveFromFavorites} />
    });
    
    return ( 
        <div>
    <h1>Favorites</h1>
     {favoriteItems}
     </div> 
     )

}

export default Favorites;


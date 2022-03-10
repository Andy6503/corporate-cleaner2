import React from "react";
import { Card, Button } from "react-bootstrap";


function FavoritesArticleCard({ article, onRemove  }){
    const { author, title, description, url, urlToImage, publishedAt, content} = article

    

    return (
        <Card className="bg-dark text-white">
            <Card.Img className="photo" src={urlToImage} alt="Article image" />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{author}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button variant="danger" onClick={() => onRemove(article)}> Remove from Favorites </Button> 
            </Card.ImgOverlay>
        </Card>
    )
}

export default FavoritesArticleCard
import React from "react";
import { Card, Button } from "react-bootstrap";


function FavoritesArticleCard({ article, onRemove  }){
    const { author, title, description, url, urlToImage, publishedAt, content} = article

    
    return (
        <Card className="bg-dark text-white">
            <Card.Img className="photo" src={urlToImage} alt="Article image" />
            <Card.Body className="card-text-format">
                <Card.Title className="title">{title}</Card.Title>
                <Card.Text>{author}</Card.Text>
                <Card.Text className="description">{description}</Card.Text>
                <Button variant="light" onClick={() => onRemove(article)}> Remove from Favorites </Button> 
            </Card.Body>
        </Card>
    )
}

export default FavoritesArticleCard
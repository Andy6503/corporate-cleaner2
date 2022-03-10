import React from "react";
import {Card, Button} from "react-bootstrap"

function CreateArticleCard({ newArticle }){
 const {title, author, description, url, urlToImage, publishAt } = newArticle


    return (
    <Card className="bg-dark text-white"> 
    <Card.Img variant="top" className="photo" src={urlToImage} alt="Article pic"  />
    <Card.Body className="card-text-format">
       <Card.Title className="title">{title}</Card.Title>
       <Card.Text>{author}</Card.Text>
       <Card.Text className="description">{description}</Card.Text>
    <Button variant="light" > Delete from Submissons </Button> 
    </Card.Body>
    </Card>
    )
}

export default CreateArticleCard

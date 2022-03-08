import React from "react";
import { Card, Button } from "react-bootstrap";


function ArticleCard({ article, onAdd }){
    const { author, title, description, url, urlToImage, publishedAt, content} = article

    return (
        // <Card className="bg-dark text-white" >
        //     <Card.Img className="photo" src={urlToImage} alt="article image" />
        //         <Card.Title className="title">{title}</Card.Title>
        //         <Card.Text>{author}</Card.Text>
        //         <Card.Text className="description">{description}</Card.Text>
        //         <Button variant="primary" onClick={onAdd}> Add to Favorites </Button> 
        // </Card>
    <Card className="bg-dark text-white"> 
    <Card.Img variant="top" className="photo" src={urlToImage}  />
    <Card.Body>
       <Card.Title className="title">{title}</Card.Title>
       <Card.Text>{author}</Card.Text>
      <Card.Text className="description">{description}</Card.Text>
    <Button variant="primary" onClick={onAdd}> Add to Favorites </Button> 
    </Card.Body>
  </Card>
    )
}

export default ArticleCard
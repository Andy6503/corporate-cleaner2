import React, {useState} from "react";
import {Card, Button} from "react-bootstrap"
import Popup from "./Popup";

function CreateArticleCard({ newArticle, removeSubmissions }){
 const {title, author, description, url, urlToImage, publishedAt } = newArticle
 const [buttonPopup, setButtonPopup] = useState(false);


    return (
       <>
         <Card className="bg-dark text-white"> 
         <Card.Img variant="top" className="photo" src={urlToImage} alt="Article pic"  />
         <Card.Body className="card-text-format">
            <Card.Title className="title">{title}</Card.Title>
            <Card.Text>{author}</Card.Text>
            <Card.Text className="description">{description}</Card.Text>
         <Button variant="light" onClick={() => removeSubmissions(newArticle)}> Delete from Submissons </Button> <Button variant="secondary" onClick={() => setButtonPopup(true)}> More Info </Button>
         </Card.Body>
         </Card>
         <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
            <h3>{title} </h3>
            <p>{author}</p>
            <p>{description}</p>
            <p>{publishedAt}</p>
            <Button href={url} target="_blank" variant="dark">
            Go to this Article
            </Button>
         </Popup>
      </>
    )
}

export default CreateArticleCard

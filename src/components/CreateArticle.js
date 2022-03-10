import React, { useState } from "react";
import CreateArticleCard from "./CreateArticleCard"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



function CreateArticle({ addNewArticle, newArticles }){
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const [image, setImage] = useState("")
    const [date, setdate] = useState("")

    function handleOnSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3001/newArticles', {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify ({
           title: title,
           author: author,
           description: description,
           link: link,
           image: image,
           date: date
         })
        })
        .then(res => res.json())
        .then(newArticleItem => addNewArticle(newArticleItem))
        setTitle("")
        setAuthor("")
        setDescription("")
        setLink("")
        setImage("")
        setdate("")
      }
    
      const newArticleList = newArticles.map((newArticle) =>{
          return <CreateArticleCard key={newArticle.id} newArticle={newArticle}  />
      })
      
    
    return (
      <div>
        <Form onSubmit={handleOnSubmit} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3>Submit an Article</h3>
            <Form.Control type="text"  name="title" placeholder="Article title..." className="input-text" value={title} onChange={e => setTitle(e.target.value)} />
            <Form.Control type="text" name="author" placeholder="Article author..." className="input-text" value={author} onChange={e => setAuthor(e.target.value)}  />
            <Form.Control type="text" name="description" placeholder="Article description..." className="input-text" value={description} onChange={e => setDescription(e.target.value)}  />
            <Form.Control type="text" name="link url" placeholder="Article link URL..." className="input-text" value={link} onChange={e => setLink(e.target.value)}  />
            <Form.Control type="text" name="image" placeholder="Article image URL..." className="input-text" value={image} onChange={e => setImage(e.target.value)}  />
            <Form.Control type="text" name="publish-date" placeholder="Article publish date..." className="input-text" value={date} onChange={e => setdate(e.target.value)}  />
            <Button variant="light" type="submit" name="submit" value="Submit Article!" className="submit">Submit</Button>
          </Form.Group>
        </Form>
        <h2>Submitted Articles</h2>
        {newArticleList}
      </div>
    )
    
    
}

export default CreateArticle;
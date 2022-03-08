import React from "react";



function CreateArticle(){
    
    return (
        <div>
        <form >
          <h3>Submit an Article</h3>
          <input
            type="text"
            name="name"
            placeholder="Article title..."
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Article author..."
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Article description..."
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Article link URL..."
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Article image URL..."
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Article content..."
            className="input-text"
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Submit Article"
            className="submit"
          />
        </form>
      </div>
    )
    
    
}

export default CreateArticle;
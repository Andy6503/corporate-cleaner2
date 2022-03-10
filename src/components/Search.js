import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Search( {onSearch} ){
    const [searchOnChange, setSearchOnChange] = useState('')

    
    function handleSubmit (e){
        e.preventDefault()
        onSearch(searchOnChange)
    }
    // Prevents webage from reload constantly when the user is trying to search 
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search All Articles</Form.Label>
                <Form.Control onChange={(e) => setSearchOnChange(e.target.value)} type="text" value={searchOnChange} placeholder="Enter a search" />
                <Form.Text className="text-muted">
                Search for any articles!
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
    )
    //This code formats the search bar and allows it to take in an input and call the "setSearchOnChange" function based on the input
}

export default Search;
import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Search( {onSearch} ){
    const [searchOnChange, setSearchOnChange] = useState('')

    
    function handleSubmit (e){
        e.preventDefault()
        onSearch(searchOnChange)
    }
    
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
}

export default Search;
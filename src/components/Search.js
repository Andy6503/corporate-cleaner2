import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function Search( {onSearch} ){
    const [searchOnChange, setSearchOnChange] = useState('')
    
    function handleSubmit (e){
        e.preventDefault()
        onSearch(searchOnChange)
        setSearchOnChange('')
    }
    // Prevents webage from reload constantly when the user is trying to search 
    

    return (
        <Navbar className="search" expand="lg">
            <Container>
                <Navbar.Collapse>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onChange={(e) => setSearchOnChange(e.target.value)} type="search" value={searchOnChange} placeholder="Enter a search" /> 
                            <Form.Text className="text-muted"> Search for any article! </Form.Text> 
                            <Button variant="light" type="submit"> Submit </Button>
                        </Form.Group>  
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    //This code formats the search bar and allows it to take in an input and call the "setSearchOnChange" function based on the input
}

export default Search;
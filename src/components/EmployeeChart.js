import React, { useState } from "react";
import EmployeeItem from "./EmployeeItem";
import {v4 as uuid} from "uuid"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"


function EmployeeChart({ employees, onDelete, onEdit, onSearch }){
    const [searchOnChange, setSearchOnChange] = useState('')
    
    function handleSubmit (e){
        e.preventDefault()
        onSearch(searchOnChange)
        setSearchOnChange('')
    }


    const employeeChart = employees.map((employee) => {
         return <EmployeeItem key={uuid()} employee={employee} onDelete = {onDelete} onEdit={onEdit}/>
    })
    
  

    return(
        <>
     <h2> Employees: </h2> 
     <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                    <Form.Control onChange={(e) => setSearchOnChange(e.target.value)} type="search" value={searchOnChange} placeholder="Enter an Employee Name" /> 
                        <Button variant="light" type="submit"> Submit </Button>
            </Form.Group>  
     </Form>
     <Button onClick = {()=>{console.log("clicked")}} variant = "success">Sort by Salary (high-low)</Button> 
     <Button>Sort by Salary (low-high)</Button> 
    {employeeChart}
        </>
    )
}

export default EmployeeChart;
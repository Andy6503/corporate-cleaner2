import React, { useState }  from "react";
import { Modal, Button, Form } from "react-bootstrap";


function CreateEmployeeModal({ show, setModalShow, setEmployees, employees} ){

  
    const [newForm, setNewForm] = useState({
      name: "",
      position: "",
      salary: "",
      date_of_birth: "",
      manager_id: "",
    })

    const onChangeHandler = (event) => {
      const newObj = {...newForm, [event.target.name]: event.target.value};
      setNewForm(newObj)

    }
    const handleOnSubmit = (event) => {
        fetch("http://localhost:9292/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify (newForm)
    })
    .then(res => res.json())
    .then(data => {
      setEmployees([...employees, data])
    })
    }


    return (
        <>
        <Modal
      show = {show} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
         Add New Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
       <Form.Group className="mb-3" >
        <Form.Label>Employee Name:</Form.Label>
         <Form.Control type="text" placeholder=" What is their Name?" name="name"  onChange={onChangeHandler} />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label> Employee Position:</Form.Label>
        <Form.Control type="text" placeholder="What Position do They Work?" name="position"  onChange={onChangeHandler} />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label> Employee Salary:</Form.Label>
        <Form.Control type="number" placeholder=" What is Their Salary?" name="salary"  onChange={onChangeHandler} />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label> Date of Birth:</Form.Label>
        <Form.Control type="date" placeholder=" When is Their Birthday?" name="date_of_birth"  onChange={onChangeHandler} />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label> Manager Id Number:</Form.Label>
        <Form.Control type="number" placeholder="Which Manager is Respondsible?" name="manager_id"  onChange={onChangeHandler} />
        </Form.Group>
    </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="success" type="submit" onClick={()=>{handleOnSubmit()}} > Add Employee </Button>
        <Button onClick={() => setModalShow(false)} variant="danger">Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
}
export default CreateEmployeeModal
import React, { useState }  from "react";
import { Modal, Button, Form } from "react-bootstrap";


function CreateEmployeeModal(props){
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [salary, setSalary] = useState("")
    const [dob, setDob] = useState("")
    const [managerId, setManagerId] = useState("")

    function handleOnSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ({
            name: name,
            position: position,
            salary: salary,
            date_of_birth: dob,
            manager_id: managerId
        })
    })
    .then(res => res.json())
    .then(console.log())

    }


    

    return (
        <>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Add New Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
       <Form.Group className="mb-3" >
        <Form.Label>Employee Name:</Form.Label>
         <Form.Control type="text" placeholder=" What is their Name?" />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label> Employee Position:</Form.Label>
        <Form.Control type="text" placeholder="What Position do They Work?" />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label> Employee Salary:</Form.Label>
        <Form.Control type="number" placeholder=" What is Their Salary?" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label> Date of Birth:</Form.Label>
        <Form.Control type="date" placeholder=" When is Their Birthday?" />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label> Manager Id Number:</Form.Label>
        <Form.Control type="number" placeholder="Which Manager is Respondsible?" />
        </Form.Group>
    </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="success" type="submit" > Add Employee </Button>
        <Button onClick={props.onHide} variant="danger">Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
}
export default CreateEmployeeModal
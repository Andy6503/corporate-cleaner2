
import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const EditFormModal = (props) => {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [salary, setSalary] = useState("")
    const [dob, setDob] = useState("")


   







    return (
        <Modal
        {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter edited name" value={name} onChange={e => setName(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPosition">
    <Form.Label>Position</Form.Label>
    <Form.Control type="text" placeholder="Enter new position" value={position} onChange={e => setPosition(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicSalary">
    <Form.Label>Salary</Form.Label>
    <Form.Control type="number" placeholder="Enter new salary" value={salary} onChange={e => setSalary(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicDOB">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="date" placeholder="Enter new birthdate" value={dob} onChange={e => setDob(e.target.value)}/>
  </Form.Group>

</Form>
          </Modal.Body>
          <Modal.Footer>
              <Button onClick = {()=>{console.log(name, position, salary, dob)}} variant = 'success'>Submit</Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
      
}

export default EditFormModal
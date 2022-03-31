
import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const EditFormModal = (props) => {

    const [newName, setName] = useState("")
    const [newPosition, setPosition] = useState("")
    const [newSalary, setSalary] = useState("")
    const [newDob, setDob] = useState("")

    //PATCH REQUEST EMPLOYEES  
  const onEdit = (data) =>{
  
    fetch(`http://localhost:9292/employees/${props.id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);

    })
  
  }
    const editItem = (newName, newPosition, newSalary, newDob) => {
        
        let data = {
            name: newName,
            position: newPosition,
            salary: newSalary,
            date_of_birth: newDob
        }
      onEdit(data)
      window.location.reload(false);
    }





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
    <Form.Control type="text" placeholder="Enter edited name" value={newName} onChange={e => setName(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPosition">
    <Form.Label>Position</Form.Label>
    <Form.Control type="text" placeholder="Enter new position" value={newPosition} onChange={e => setPosition(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicSalary">
    <Form.Label>Salary</Form.Label>
    <Form.Control type="number" placeholder="Enter new salary" value={newSalary} onChange={e => setSalary(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicDOB">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="date" placeholder="Enter new birthdate" value={newDob} onChange={e => setDob(e.target.value)}/>
  </Form.Group>

</Form>
          </Modal.Body>
          <Modal.Footer>
              <Button onClick = {()=>{editItem(newName, newPosition, newSalary, newDob)}} variant = 'success'>Submit</Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
      
}

export default EditFormModal
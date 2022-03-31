import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditFormModalManager = (props) => {
  // const editItem = (newName, newPosition, newSalary, newDob) => {
  //     let id = props.id
  //     let data = {
  //         name: newName,
  //         position: newPosition,
  //         salary: newSalary,
  //         date_of_birth: newDob
  //     }
  //   edithandler(id,data)
  // }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Manager
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter edited name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control type="text" placeholder="Enter new position" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control type="number" placeholder="Enter new salary" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" placeholder="Enter new birthdate" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditFormModalManager;

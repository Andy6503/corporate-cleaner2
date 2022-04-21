import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormModalManager = (props) => {
  const [managerName, setManagerName] = useState("");
  const [managerPosition, setManagerPosition] = useState("");
  const [managerSalary, setManagerSalary] = useState("");
  const [managerDOB, setManagerDOB] = useState("");

  //PATCH REQUEST Managers
  const onEdit = (data) => {
    fetch(`/managers/${props.id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };
  const editItem = (
    managerName,
    managerPosition,
    managerSalary,
    managerDOB
  ) => {
    let data = {
      name: managerName,
      position: managerPosition,
      salary: managerSalary,
      date_of_birth: managerDOB,
    };
    onEdit(data);
    window.location.reload();
  };

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
            <Form.Control
              type="text"
              placeholder="Enter edited name"
              value={managerName}
              onChange={(e) => setManagerName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new position"
              value={managerPosition}
              onChange={(e) => setManagerPosition(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter new salary"
              value={managerSalary}
              onChange={(e) => setManagerSalary(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter new birthdate"
              value={managerDOB}
              onChange={(e) => setManagerDOB(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            editItem(managerName, managerPosition, managerSalary, managerDOB);
          }}
          variant="success"
        >
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditFormModalManager;

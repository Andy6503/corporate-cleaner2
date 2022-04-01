import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import EditFormModalSupervisor from "./EditFormModalSupervisor";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import SupervisorManagerList from "./SupervisorManagerList";
import { v4 as uuid } from "uuid";

function SupervisorItem({ supervisor, onDelete }) {
  const { id, name, position, salary, date_of_birth } = supervisor;
  const [modalShow, setModalShow] = React.useState(false);
  const deleteItem = (id) => {
    onDelete(id);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [associatedManagers, setAssociatedManagers] = useState([]);

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{name} </Accordion.Header>
          <Accordion.Body>
            Supervisor id: {id} | BOD: {date_of_birth} | Salary: ${salary} |
            Position: {position} |
            <Button
              onClick={() => {
                handleShow();
                console.log();
              }}
              className="employee-button"
              variant="warning"
            >
              VIEW MANAGERS
            </Button>
            <Button
              className="employee-button"
              variant="success"
              onClick={() => setModalShow(true)}
            >
              Edit
            </Button>
            <Button
              onClick={() => deleteItem(id)}
              className="employee-button"
              variant="danger"
            >
              DELETE
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <EditFormModalSupervisor
        id={id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Managers</Modal.Title>
        </Modal.Header>
        <Modal.Body>managers go here</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SupervisorItem;

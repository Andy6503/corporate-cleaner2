import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import EditFormModalManager from "./EditFormModalManager";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import AssociateList from "./AssociateList";
import { v4 as uuid } from "uuid";

function ManagerItem({ manager, onDelete }) {
  const [modalShow, setModalShow] = React.useState(false);
  const { id, name, position, salary, date_of_birth, supervisor_id } = manager;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [associatedEmployees, setAssociatedEmployees] = useState([]);
  const deleteItem = (id) => {
    onDelete(id);
  };
  const getManagerEmployees = () => {
    fetch(`http://localhost:9292/managers/${id}/employees`)
      .then((resp) => resp.json())
      .then((employees) => {
        setAssociatedEmployees(employees);
      });
  };
  console.log(associatedEmployees);
  const associateEmployeeList = associatedEmployees.map((assEmployee) => {
    return <AssociateList key={uuid()} assEmployee={assEmployee} />;
  });

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{name} </Accordion.Header>
          <Accordion.Body>
            Manager ID: {id} | BOD: {date_of_birth} | Salary: ${salary} |
            Position: {position} | Supervisor ID: {supervisor_id}
            <Button
              onClick={() => {
                handleShow();
                getManagerEmployees();
              }}
              className="employee-button"
              variant="warning"
            >
              View Employees
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
      <EditFormModalManager
        id={id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employees</Modal.Title>
        </Modal.Header>
        <Modal.Body>{associateEmployeeList}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ManagerItem;

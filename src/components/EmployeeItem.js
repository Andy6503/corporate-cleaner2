import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import EditFormModal from "./EditFormModal";
import Modal from "react-bootstrap/Modal";
import { v4 as uuid } from "uuid";

import EmployeeManagerList from "./EmployeeManagerList";

function EmployeeItem({ employee, onDelete, onEdit }) {
  const [modalShow, setModalShow] = React.useState(false);
  const { id, name, position, salary, date_of_birth, manager_id } = employee;
  const [associatedManager, setAssociatedManager] = useState([]);
  //delete
  const deleteItem = (id) => {
    onDelete(id);
  };

  const getEmployeeManager = () => {
    fetch(`http://localhost:9292/employees/${id}/manager`)
      .then((resp) => resp.json())
      .then((manager) => {
        setAssociatedManager(manager);
        console.log(manager);
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(associatedManager);
  // const employeesManager = associatedManager.map((manager) => {
  //   return <EmployeeManagerList key={uuid()} manager={manager} />;
  // });
  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{name} </Accordion.Header>
          <Accordion.Body>
            Employee ID: {id} | BOD: {date_of_birth} | Salary: ${salary} |
            Position: {position} | Manager ID: {manager_id}
            <Button
              onClick={() => {
                handleShow();
                getEmployeeManager();
              }}
              className="employee-button"
              variant="warning"
            >
              View Overseeing Manager
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
      <EditFormModal
        id={id}
        show={modalShow}
        edithandler={onEdit}
        onHide={() => setModalShow(false)}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Managers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmployeeManagerList key={uuid()} manager={associatedManager} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmployeeItem;

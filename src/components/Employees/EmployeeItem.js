import React, { useState } from "react";
import EditFormModal from "./EditFormModal";
import EmployeeManagerList from "../Managers/EmployeeManagerList";
import { v4 as uuid } from "uuid";
import { Accordion, Modal, Button } from "react-bootstrap";

function EmployeeItem({ employee, onDelete, onEdit }) {
  const [modalShow, setModalShow] = React.useState(false);
  const { id, name, position, salary, date_of_birth, manager_id } = employee;
  const [associatedManager, setAssociatedManager] = useState([]);
  //delete
  const deleteItem = (id) => {
    onDelete(id);
  };

  const getEmployeeManager = () => {
    fetch(`/employees/${id}`)
      .then((resp) => resp.json())
      .then((employee) => {
        setAssociatedManager(employee.manager);
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  // const employeesManager = associatedManager.map((manager) => {
  //   return <EmployeeManagerList key={uuid()} manager={manager} />;
  // });
  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className = "grow"> ♟{name} </Accordion.Header>
          <Accordion.Body>
           Employee ID: {id} | BOD: {date_of_birth} | Salary: ${salary} |
            Position: {position}
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
          <Modal.Title>Manager</Modal.Title>
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

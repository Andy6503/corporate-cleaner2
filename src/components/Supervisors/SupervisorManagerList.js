import React, {useState} from "react";
import SupervisorManagerEmployeeList from "./SupervisorManagerEmployeeList";
import {ListGroup, Modal, Button }from "react-bootstrap";

const SupervisorManagerList = ({ assManager }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id, name, position, salary, date_of_birth } = assManager;
  
  const supervisorManagerEmployeeList = assManager.employees.map((employee) => {
    return <SupervisorManagerEmployeeList key={employee.id} employee={employee} />;
  });
  

  return (
    <ListGroup>
      <ListGroup.Item>
      <div className="fw-bold">{name}</div>
        Manager ID: {id} | BOD: {date_of_birth} | Salary: ${salary} | Position:{" "}
        {position}   <Button variant="primary" onClick={handleShow}> View Employees </Button>
      </ListGroup.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employees</Modal.Title>
        </Modal.Header>
        <Modal.Body>{supervisorManagerEmployeeList}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </ListGroup>

  );
};

export default SupervisorManagerList;

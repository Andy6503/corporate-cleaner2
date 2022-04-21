import React, { useState } from "react";
import EditFormModalSupervisor from "./EditFormModalSupervisor";
import SupervisorManagerList from "./SupervisorManagerList";
import { Accordion, Modal, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function SupervisorItem({ supervisor, onDelete }) {
  const { id, name, position, salary, date_of_birth } = supervisor;
  const [modalShow, setModalShow] = React.useState(false);

  const [associatedManagers, setAssociatedManagers] = useState([]);
  const deleteItem = (id) => {
    onDelete(id);
  };

  const getSupervisorEmployees = () => {
    fetch(`http://localhost:9292/supervisors/${id}/managers`)
      .then((resp) => resp.json())
      .then((managers) => {
        setAssociatedManagers(managers);
        console.log(managers);
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const supervisorManagerList = associatedManagers.map((assManager) => {
    return <SupervisorManagerList key={uuid()} assManager={assManager} />;
  });

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className = "grow"> ♜ {name} </Accordion.Header>
          <Accordion.Body>
            Supervisor ID: {id} | BOD: {date_of_birth} | Salary: ${salary} |
            Position: {position} |
            <Button
              onClick={() => {
                handleShow();
                getSupervisorEmployees();
              }}
              className="employee-button"
              variant="warning"
            >
              View Managers
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
        <Modal.Body>{supervisorManagerList}</Modal.Body>
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

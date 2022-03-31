import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

function SupervisorItem({ supervisor, onDelete, setModalShow }) {
  const { id, name, position, salary, date_of_birth } = supervisor;

  const deleteItem = (id) => {
    onDelete(id);
  };

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{name} </Accordion.Header>
          <Accordion.Body>
            Supervisor id: {id} | BOD: {date_of_birth} | Salary: ${salary} |
            Position: {position} |
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
    </>
  );
}

export default SupervisorItem;

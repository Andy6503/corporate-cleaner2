import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import EditFormModalSupervisor from "./EditFormModalSupervisor";

function SupervisorItem({ supervisor, onDelete }) {
  const { id, name, position, salary, date_of_birth } = supervisor;
  const [modalShow, setModalShow] = React.useState(false);
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
      <EditFormModalSupervisor
        id={id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default SupervisorItem;

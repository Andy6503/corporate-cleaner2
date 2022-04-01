import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import EditFormModalManager from "./EditFormModalManager";

function ManagerItem({ manager, onDelete }) {
  const [modalShow, setModalShow] = React.useState(false);
  const { id, name, position, salary, date_of_birth, supervisor_id } = manager;

  const deleteItem = (id) => {
    onDelete(id);
  };

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{name} </Accordion.Header>
          <Accordion.Body>
            Manager id: {id} | BOD: {date_of_birth} | Salary: ${salary} |
            Position: {position} | Supervisor: {supervisor_id}
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
    </>
  );
}

export default ManagerItem;

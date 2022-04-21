import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const SupervisorManagerList = ({ assManager }) => {
  const { id, name, position, salary, date_of_birth } = assManager;

  return (
    <ListGroup>
      <ListGroup.Item>
        Manager ID: {id} | BOD: {date_of_birth} | Salary: ${salary} | Position:{" "}
        {position}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SupervisorManagerList;

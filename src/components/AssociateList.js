import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const AssociateList = ({ assEmployee }) => {
  const { id, name, position, salary, date_of_birth, manager_id } = assEmployee;

  return (
    <ListGroup>
      <ListGroup.Item>
        Employee ID: {id} | BOD: {date_of_birth} | Salary: ${salary} | Position:{" "}
        {position} | Manager ID: {manager_id}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default AssociateList;

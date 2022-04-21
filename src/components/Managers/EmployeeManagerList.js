import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
const EmployeeManagerList = ({ manager }) => {
  const { id, name, position, salary, date_of_birth, supervisor_id } = manager;

  return (
    <ListGroup>
      <ListGroup.Item>
        Manager ID: {id} | BOD: {date_of_birth} | Salary: ${salary} | Position:{" "}
        {position} | Supervisor ID: {supervisor_id}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default EmployeeManagerList;

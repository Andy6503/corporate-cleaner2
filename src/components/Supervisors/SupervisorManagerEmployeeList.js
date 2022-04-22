import React from "react";
import { ListGroup } from "react-bootstrap";

const SupervisorManagerEmployeeList = ({ employee }) => {
    const { id, name, position, salary, date_of_birth, manager_id } = employee;
  
    return (
      <ListGroup>
        <ListGroup.Item>
        <div className="fw-bold">{name}</div>
          Employee ID: {id} | BOD: {date_of_birth} | Salary: ${salary} | Position:{" "}
          {position} | Manager ID: {manager_id}
        </ListGroup.Item>
      </ListGroup>
    );
  };

  export default SupervisorManagerEmployeeList
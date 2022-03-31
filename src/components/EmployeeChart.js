import React, { useState } from "react";
import EmployeeItem from "./EmployeeItem";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function EmployeeChart({
  employees,
  setEmployees,
  onDelete,
  onEdit,
  onSearch,
}) {
  const [searchOnChange, setSearchOnChange] = useState("");

  const employees_high_to_low = () => {
    fetch("http://localhost:9292/employees/by_salary/")
      .then((res) => res.json())
      .then((employees) => {
        setEmployees(employees);
      });
  };

  const employees_low_to_high = () => {
    fetch("http://localhost:9292/employees/by_salary_asc/")
      .then((res) => res.json())
      .then((employees) => {
        setEmployees(employees);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchOnChange);
    setSearchOnChange("");
  }

  const employeeChart = employees.map((employee) => {
    return (
      <EmployeeItem
        key={uuid()}
        employee={employee}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });

  return (
    <>
      <h2> Employees: </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => setSearchOnChange(e.target.value)}
            type="search"
            value={searchOnChange}
            placeholder="Enter an Employee Name"
          />
          <Button variant="light" type="submit">
            {" "}
            Submit{" "}
          </Button>
        </Form.Group>
      </Form>
      <Button
        onClick={() => {
          employees_high_to_low();
        }}
        variant="success"
      >
        Sort by Salary (high-low)
      </Button>
      <Button
        onClick={() => {
          employees_low_to_high();
        }}
      >
        Sort by Salary (low-high)
      </Button>
      {employeeChart}
    </>
  );
}

export default EmployeeChart;

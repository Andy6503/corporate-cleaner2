import React, { useState } from "react";
import EmployeeItem from "./EmployeeItem";
import CreateEmployeeModal from "./CreateEmployeeModal";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

function EmployeeChart({
  employees,
  setEmployees,
  onDelete,
  onEdit,
  onSearch,
}) {
  const [searchOnChange, setSearchOnChange] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

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
      <Form onSubmit={handleSubmit} className="mb-3">
        <Row>
          <Col>
          <Form.Control
            onChange={(e) => setSearchOnChange(e.target.value)}
            type="search"
            value={searchOnChange}
            placeholder="Search for an Employee"
          />
          </Col>
          <Col>
          <Button
        onClick={() => {
          employees_high_to_low();
        }}
        variant="success"
      >
        Sort by Salary (high-low)
      </Button>
      </Col>
      <Col>
      <Button
        onClick={() => {
          employees_low_to_high();
        }}
      >
        Sort by Salary (low-high)
    </Button>
    </Col>
    <Col>
    <Button 
  onClick={()=>{
    setModalShow(true)
  }}  
    variant="secondary">
      Add a New Employee
    </Button>
             </Col>
        </Row>
    </Form>
      {employeeChart}
      <CreateEmployeeModal
      show={modalShow}
      onHide={() => setModalShow(false)} 
      />
    </>
  );
}

export default EmployeeChart;

import React from "react";
import EmployeeItem from "./EmployeeItem";
import CreateEmployeeModal from "./CreateEmployeeModal";
import { v4 as uuid } from "uuid";
import { Row, Col, Button, Form } from "react-bootstrap";

function EmployeeChart({
  employees,
  setEmployees,
  onDelete,
  onEdit,
}){

  const [modalShow, setModalShow] = React.useState(false);

  const employees_high_to_low = () => {
    fetch("/employees/by_salary/")
      .then((res) => res.json())
      .then((employees) => {
        setEmployees(employees);
      });
  };

  const employees_low_to_high = () => {
    fetch("/employees/by_salary_asc/")
      .then((res) => res.json())
      .then((employees) => {
        setEmployees(employees);
      });
  };

  
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
      <h2 className = "chart-title"> Employees: </h2>
      <Form  className="mb-3">
        <Row>
          <Col>
          <Button 
          className = "left-button"
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
      employees={employees}
      setEmployees={setEmployees}
      setModalShow={setModalShow}
      onHide={() => setModalShow(false)} 
      />
    </>
  );
}

export default EmployeeChart;

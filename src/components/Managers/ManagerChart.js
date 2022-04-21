import React from "react";
import ManagerItem from "./ManagerItem.js";
import {Button, Row, Col, Form} from "react-bootstrap";
import { v4 as uuid } from "uuid";

function ManagerChart({ setManagers, managers, onDelete }) {
  const managers_high_to_low = () => {
    fetch("http://localhost:9292/managers/by_salary/")
      .then((res) => res.json())
      .then((managers) => {
        setManagers(managers);
      });
  };
  const [modalShow, setModalShow] = React.useState(false);
  const managers_low_to_high = () => {
    fetch("http://localhost:9292/managers/by_salary_asc/")
      .then((res) => res.json())
      .then((managers) => {
        setManagers(managers);
      });
  };

  const managerChart = managers.map((manager) => {
    return <ManagerItem key={uuid()} manager={manager} onDelete={onDelete} />;
  });

  return (
    <>
      <h2 className = "chart-title"> Managers:</h2>
      <Form className="mb-3">
        <Row>
          <Col>
      <Button
      className = "left-button"
        onClick={() => {
          managers_high_to_low();
        }}
        variant="success"
      >
        Sort by Salary (high-low)
      </Button>
          </Col>
          <Col>
      <Button
        onClick={() => {
          managers_low_to_high();
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
      Add a New Manager
    </Button>
         </Col>
        </Row>
      </Form>
      {managerChart}
    </>
  );
}

export default ManagerChart;

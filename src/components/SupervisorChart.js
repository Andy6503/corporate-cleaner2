import React from "react";
import SupervisorItem from "./SupervisorItem";
import EditFormModalSupervisor from "./EditFormModalSupervisor";
import Button from "react-bootstrap/Button";
import { v4 as uuid } from "uuid";

function SupervisorChart({ supervisors, setSupervisors, onDelete }) {
  const [modalShow, setModalShow] = React.useState(false);

  const supervisors_high_to_low = () => {
    fetch("http://localhost:9292/supervisors/by_salary/")
      .then((res) => res.json())
      .then((supervisors) => {
        setSupervisors(supervisors);
      });
  };

  const supervisors_low_to_high = () => {
    fetch("http://localhost:9292/supervisors/by_salary_asc/")
      .then((res) => res.json())
      .then((supervisors) => {
        setSupervisors(supervisors);
      });
  };

  const supervisorChart = supervisors.map((supervisor) => {
    return (
      <SupervisorItem
        key={uuid()}
        supervisor={supervisor}
        setModalShow={setModalShow}
        onDelete={onDelete}
      />
    );
  });

  return (
    <>
      <h2> Supervisors: </h2>
      <Button
        onClick={() => {
          supervisors_high_to_low();
        }}
        variant="success"
      >
        Sort by Salary (high-low)
      </Button>
      <Button
        onClick={() => {
          supervisors_low_to_high();
        }}
      >
        Sort by Salary (low-high)
      </Button>
      {supervisorChart}
      <EditFormModalSupervisor
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default SupervisorChart;

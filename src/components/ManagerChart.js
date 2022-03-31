import React from "react";
import ManagerItem from "./ManagerItem.js";
import EditFormModalManager from "./EditFormModalManager";
import Button from "react-bootstrap/Button";
import { v4 as uuid } from "uuid";

function ManagerChart({ setManagers, managers, onDelete }) {
  const [modalShow, setModalShow] = React.useState(false);

  const managers_high_to_low = () => {
    fetch("http://localhost:9292/managers/by_salary/")
      .then((res) => res.json())
      .then((managers) => {
        setManagers(managers);
      });
  };

  const managers_low_to_high = () => {
    fetch("http://localhost:9292/managers/by_salary_asc/")
      .then((res) => res.json())
      .then((managers) => {
        setManagers(managers);
      });
  };

  const managerChart = managers.map((manager) => {
    return (
      <ManagerItem
        key={uuid()}
        manager={manager}
        onDelete={onDelete}
        setModalShow={setModalShow}
      />
    );
  });

  return (
    <>
      <h2> Managers:</h2>
      <Button
        onClick={() => {
          managers_high_to_low();
        }}
        variant="success"
      >
        Sort by Salary (high-low)
      </Button>
      <Button
        onClick={() => {
          managers_low_to_high();
        }}
      >
        Sort by Salary (low-high)
      </Button>
      {managerChart}
      <EditFormModalManager
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ManagerChart;

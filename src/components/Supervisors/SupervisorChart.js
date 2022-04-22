import React from "react";
import SupervisorItem from "./SupervisorItem";
import {Button, Card} from "react-bootstrap";
import { v4 as uuid } from "uuid";

function SupervisorChart({ supervisors, setSupervisors, onDelete, searchTerm, 
  onSearchChange}) {
 
  const [modalShow, setModalShow] = React.useState(false);
  

  const supervisorChart = supervisors.map((supervisor) => {
    return (
      <SupervisorItem
        key={uuid()}
        supervisor={supervisor}
        onDelete={onDelete}
      />
    );
  });

  return (
    <>
    <Card>
    <div class="row">
      <div class="col-md-12 d-flex">
      <Card.Title className = "chart-title"> Supervisors:
      <div className="searchbar">
      <label className="employeesrch" htmlFor="search">Search Supervisors:</label>
      <input className="searchBox"
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
    
       
      <Button 
      className="left-button"
      onClick={()=>{
        setModalShow(true)
      }}  
    variant="secondary">
      Add a New Supervisor
    </Button>
          </Card.Title>
        </div>
      </div>
    </Card>
      {supervisorChart}
    </>
  );
}

export default SupervisorChart;

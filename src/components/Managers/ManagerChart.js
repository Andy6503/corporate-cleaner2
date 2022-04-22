import React from "react";
import ManagerItem from "./ManagerItem.js";
import {Button, Card} from "react-bootstrap";
import { v4 as uuid } from "uuid";

function ManagerChart({ setManagers, managers, onDelete, searchTerm, 
  onSearchChange}) {
  
  const [modalShow, setModalShow] = React.useState(false);
 
  const managerChart = managers.map((manager) => {
    return <ManagerItem key={uuid()} manager={manager} onDelete={onDelete} />;
  });

  return (
    <>
    <Card>
    <div class="row">
      <div class="col-md-12 d-flex">
      <Card.Title className = "chart-title"> Managers:
      <div className="searchbar">
      <label className="employeesrch" htmlFor="search">Search Managers:</label>
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
      Add a New Manager
    </Button>
    </Card.Title>
      </div>
      </div>
    </Card>
      {managerChart}
    </>
  );
}

export default ManagerChart;

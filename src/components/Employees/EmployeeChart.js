import React from "react";
import EmployeeItem from "./EmployeeItem";
import CreateEmployeeModal from "./CreateEmployeeModal";
import { v4 as uuid } from "uuid";
import { Button, Card} from "react-bootstrap";

function EmployeeChart({
  employees,
  setEmployees,
  onDelete,
  onEdit,
  searchTerm, 
  onSearchChange
}){

  const [modalShow, setModalShow] = React.useState(false);

 

  
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
    <Card>
    <div class="row">
      <div class="col-md-12 d-flex">
      <Card.Title className = "chart-title"> Employees:
      <div className="searchbar">
      <label className="employeesrch" htmlFor="search">Search Employees:</label>
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
      Add a New Employee
    </Button>
      </Card.Title>
      </div>
   </div>
      
    
    </Card>
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

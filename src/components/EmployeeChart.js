import React from "react";
import EmployeeItem from "./EmployeeItem";
import EditFormModal from "./EditFormModal";
import {v4 as uuid} from "uuid"

function EmployeeChart({ employees, onDelete }){
    const [modalShow, setModalShow] = React.useState(false);


    const employeeChart = employees.map((employee) => {
         return <EmployeeItem key={uuid()} employee={employee} setModalShow = {setModalShow} onDelete = {onDelete}/>
    })
    
  

    return(
        <>
         <h2> Employees: </h2>
         {employeeChart}
         <EditFormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}

export default EmployeeChart;
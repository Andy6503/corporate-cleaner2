import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import EditFormModal from "./EditFormModal";

function EmployeeItem({ employee, onDelete, onEdit}){
  const [modalShow, setModalShow] = React.useState(false);
 const { id, name, position, salary, date_of_birth, manager_id } = employee



//delete
const deleteItem = (id) => {
  onDelete(id);
};





    return (
      <>
        <Accordion  flush>
        <Accordion.Item eventKey="0">
        <Accordion.Header>{name} </Accordion.Header>
        <Accordion.Body>
         Employee id: {id} | BOD: {date_of_birth} | Salary: ${salary} | Positon: {position} | Manager: {manager_id}
         <Button className = "employee-button" variant="success" onClick={() => setModalShow(true)}>Edit</Button>
         <Button onClick={() => deleteItem(id)} className = "employee-button" variant="danger">DELETE</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <EditFormModal
    id = {id}
    show={modalShow}
    edithandler={onEdit}
    onHide={() => setModalShow(false)}
  


  />
  </>
    )
};

export default EmployeeItem
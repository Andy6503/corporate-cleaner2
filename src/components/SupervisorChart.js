import React from "react";
import SupervisorItem from "./SupervisorItem";
import EditFormModalSupervisor from "./EditFormModalSupervisor";
import {v4 as uuid} from "uuid"


function SupervisorChart({ supervisors, onDelete }){
    const [modalShow, setModalShow] = React.useState(false);

    
    const supervisorChart = supervisors.map((supervisor) => {
         return <SupervisorItem key={uuid()} supervisor={supervisor} setModalShow = {setModalShow} onDelete = {onDelete}/>
    })
    
    
    return (
        <>
        <h2> Supervisors: </h2>
        {supervisorChart}
        <EditFormModalSupervisor
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}

export default SupervisorChart
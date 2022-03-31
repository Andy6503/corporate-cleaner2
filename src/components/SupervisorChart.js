import React from "react";
import SupervisorItem from "./SupervisorItem";
import EditFormModal from "./EditFormModal";

function SupervisorChart({ supervisors, onDelete }){
    const [modalShow, setModalShow] = React.useState(false);

    
    const supervisorChart = supervisors.map((supervisor) => {
         return <SupervisorItem key={supervisor.id} supervisor={supervisor} setModalShow = {setModalShow} onDelete = {onDelete}/>
    })
    
    
    return (
        <>
        <h2> Supervisors: </h2>
        {supervisorChart}
        <EditFormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}

export default SupervisorChart
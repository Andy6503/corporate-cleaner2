import React from "react";
import ManagerItem from './ManagerItem.js'
import EditFormModal from "./EditFormModal";



function ManagerChart({ managers, onDelete }){
    const [modalShow, setModalShow] = React.useState(false);

    const managerChart = managers.map((manager) =>{
        return <ManagerItem key={manager.id} manager={manager} onDelete= {onDelete} setModalShow = {setModalShow} />
    })


    return (
        <>
        <h2> Managers:</h2>
        {managerChart}
        <EditFormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    )
}

export default ManagerChart
import React from "react";
import ManagerItem from './ManagerItem.js'
import EditFormModalManager from "./EditFormModalManager";
import {v4 as uuid} from "uuid"




function ManagerChart({ managers, onDelete }){
    const [modalShow, setModalShow] = React.useState(false);

    const managerChart = managers.map((manager) =>{
        return <ManagerItem key={uuid()} manager={manager} onDelete= {onDelete} setModalShow = {setModalShow} />
    })


    return (
        <>
        <h2> Managers:</h2>
        {managerChart}
        <EditFormModalManager
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    )
}

export default ManagerChart
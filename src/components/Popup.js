import React from "react";
import "./Popup.css"
import  { Button } from "react-bootstrap";

function Popup(props){

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Button className="close-btn" variant="light" onClick={() => props.setTrigger(false)}>❌</Button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
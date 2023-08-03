import React from "react";


const Modal = (props) => {
    return(
        <>
            <div className="flex flex-col">
                <label className="text-left">Doctor Name:</label>
                <input type={props.type} className={props.className} style={props.style} placeholder={props.placeholder} onChange={props.onchange} value={props.value} name={props.name}/>
            </div>
            
        </>
    )
}

export default Modal;
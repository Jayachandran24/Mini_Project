import React, { useState } from "react";


const Input = (props) => {


    return(
        <>
        <div className="mb-4 flex flex-row  w-full mr-auto ml-auto text-left sm:flex-col sm:w-9/12 mt-5">
            <label className="font-semibold tracking-[1px] mb-2">{props.label}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} className="p-3 border border-slake-400" />
        </div>
        </>
    )
}

export default Input;
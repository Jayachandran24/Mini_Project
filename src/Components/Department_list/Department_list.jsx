import React from "react";


const Department_list = (props) =>{
    return(
        <>
            <div className="p-5 mb-5 text-center  " style={{width:'300px', height:'130px', borderRadius:'50px'}}>
                <div className="w-full flex justify-center text-4xl mb-3">{props.icon}</div>
                <h4 className="text-xl tracking-[1px] font-semibold">{props.Heading}</h4>
            </div>
        </>
    )
}

export default Department_list;
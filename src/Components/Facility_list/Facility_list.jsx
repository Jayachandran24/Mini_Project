import React from "react";

const Facility_list = (props) => {
    return(
        <>
        <div className="facility_list py-7 px-5 border border-slate-200 w-[550px] mb-10 rounded-[12px] font-semibold  h-[200px]">
            <div className="text-center w-full flex justify-center text-4xl mb-3">{props.icon}</div>
            <h4 className="tracking-[1px] mb-2 font-bold text-[19px]">{props.Heading}</h4>
            <p>{props.Contant}</p>
        </div>
        </>
    )
}

export default Facility_list;
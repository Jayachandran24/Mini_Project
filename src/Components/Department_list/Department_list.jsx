import React from "react";
import { Link } from "react-router-dom";


const Department_list = (props) => {
    return (
        <>
            <div className="facility_list dept p-5 mb-5 text-center border border-slate-200 cursor-pointer text-slate-300" style={{ width: '300px', borderRadius: '12px' }}>
                <Link to={props.link}>
                    <div className="w-full flex justify-center mb-3  items-center"><img src={props.icon} alt="icons" className="w-[70px]" /></div>
                    <h4 className="text-lg tracking-[1px] font-semibold  ">{props.Heading}</h4>
                </Link>
            </div>
        </>
    )
}

export default Department_list;
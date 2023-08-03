import React, { useEffect, useState } from "react";
import Navbar from "../../Components/SideBar/Navbar";
import axios from "axios";


const Appointments = () => {
    const END_POINT = `${process.env.REACT_APP_API_ENDPOINT}/DoctorAppointment.php`;
    const [data, setData] = useState([])
    useEffect(() => {
        axios(END_POINT).then(response => {
            // console.log(response.data.docname);
            console.log(response.data.values)
            setData(response.data.values)
            
        }).catch(error => {
            console.log(error);
        });
    }, [])
    // console.log(data)
    return (
        <>
            <div className="bg-slate-600">
                <div>
                    <Navbar />
                </div>
                <div className="w-full h-full">
                    <div className="report w-10/12 h-[800px] left-[160px] right-0 mt-24 absolute">
                        <table className="w-9/12 mr-auto ml-auto mt-14">
                            <thead>
                                <tr>
                                        {/* <th>{localStorage.getItem('Docmail')}</th> */}
                                    <th className="border border-slake-400">Id</th>
                                    <th className="border border-slake-400">Name</th>
                                    <th className="border border-slake-400">Email</th>
                                    <th className="border border-slake-400">Mobile</th>
                                    <th className="border border-slake-400">DOB</th>
                                    <th className="border border-slake-400">Doctor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((values, index) => {
                                        return <tr key={index}>
                                        <td className="border border-slake-400">{values.id}</td>
                                        <td className="border border-slake-400">{values.name}</td>
                                        <td className="border border-slake-400">{values.email}</td>
                                        <td className="border border-slake-400">{values.phone}</td>
                                        <td className="border border-slake-400">{values.date}</td>
                                        <td className="border border-slake-400">{values.docname}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointments;

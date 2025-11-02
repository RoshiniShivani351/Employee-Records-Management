import { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee(){
    const {employeeid}=useParams();
    const [employee,setEmployee]=useState({});
    useEffect(()=>{
        fetch("http://localhost:3001/employees/"+employeeid)
        .then((res)=>res.json())
        .then((data)=>setEmployee(data))
        .catch((err)=>console.log(err.message))
     },[]);
    return(
     <div className="container" style={{ textAlign: "center" }}>
        <h1>Employee Details</h1>
       {employee && <div className="details">
            <p><strong>ID:</strong>{employee.id}</p>
           <p><strong>Name:</strong>{employee.name}</p>
           <p><strong>Role:</strong>{employee.role}</p>
           <p><strong>Place:</strong>{employee.place}</p>
        </div>}
        <Link to="/" className="btn btn-back">Back</Link>
     </div>
    )
};
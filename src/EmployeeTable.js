import { useEffect } from "react";
import {useState} from "react";
import { Link,useNavigate } from "react-router-dom";

export default function EmployeeTable(){
    const[Employees,setEmployees]=useState([]);
    const navigate=useNavigate();
    const DisplayDetails=(id)=>{
        navigate("/Employee/view/"+id)
    }
    const EditDetails=(id)=>{
        navigate("/Employee/edit/"+id)
    }
    const RemoveDetails=(id)=>{
        if(window.confirm("Are you sure you want to delete the employee record?")){
            fetch("http://localhost:3001/employees/"+id,{
      method:"DELETE",     
    })
    .then((res)=>{
      alert("Removed student data successfully.");
      window.location.reload();
    } )
    .catch((err)=>console.log(err.message))       
                         //to post the data into the json server we have to use fetch method
                }      
    }

    useEffect(()=>{
        fetch("http://localhost:3001/employees")
        .then((res)=>res.json())
        .then((data)=>
            setEmployees(data)).catch((err)=>
            console.log(err.message))
    },[])
    return(
        <div className="container" style={{ textAlign: "center" }}>
            <h2>Employee Records</h2>
        
         <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/Employee/create" className="btn add-btn">Add new Employee</Link>
    </div>
            
            <table className="employee-table">

                <thead>
                    <tr>
                        <th>SI.NO</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>place</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       Employees && Employees.map((item,index)=>(
<tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.role}</td>
                        <td>{item.place}</td>
                        <td>
                            <button onClick={()=>DisplayDetails(item.id)} className="btn btn-info">View</button> 
                            <button onClick={()=>{EditDetails(item.id)}}className="btn btn-primary">Edit</button>
                            <button onClick={()=>{RemoveDetails(item.id)}}className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                        )
                        )
                    
                    }
                </tbody>
            </table>
        </div>
    )
};
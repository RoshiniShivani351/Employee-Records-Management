import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmployee(){
   
const {employeeid}=useParams();      //using prarams to get the id of employee to be edited
const[id,setId]=useState("");                 //when we are updating the values we have to maintain the react in the application so for this we creating seperate state
  const[ name,setName]=useState("");   
  const[role,setRole]=useState("");   
  const[place,setPlace]=useState(""); 
  const[validation,setValidation]=useState(false); 
  const navigate=useNavigate();
    //const [employee,setEmployee]=useState({});
    useEffect(()=>{
        fetch("http://localhost:3001/employees/"+employeeid)
        .then((res)=>res.json())
        .then((data)=>{
            setId(data.id);
            setName(data.name);      //data is obj from that we are accesing id
            setRole(data.role);
            setPlace(data.place);
        })
        .catch((err)=>console.log(err.message))
     },[employeeid]);
   
const handleSubmit=(e)=>{
    e.preventDefault(); 
    

    fetch("http://localhost:3001/employees/"+employeeid,{
      method:"PUT",     
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ id, name, role, place })
    })
    .then((res)=>{
      alert("Employee Data updated successfully.");
      navigate("/");
    } )
    .catch((err)=>console.log(err.message))       
                         //to post the data into the json server we have to use fetch method
                }      
    
    return(
         <div className="csscontainer" >
        <h2>Edit Employee Details</h2>
        <form onSubmit={handleSubmit}>

          <div className="form-group">     
            <label htmlFor="id" >ID :</label>
            <input type="text" id="id" name="id"  required value={id} onChange={e=>setId(e.target.value)
 } onMouseDown={()=>setValidation(true)}/>     {/*when i am updating the id value(setid) that current value is assigned to id      and   value=id-default value   */}
             {id.length===0 && validation && <span className="errorMsg">Please Enter Your id</span>}
           </div>

          <div className="form-group">
             <label htmlFor="name">Name :</label>
            <input type="text" id="name" name="name" required value={name} onChange={e=>setName(e.target.value)
   } onMouseDown={()=>setValidation(true)} />
               {name.length===0 && validation && <span className="errorMsg">Please Enter Your Name</span>}
           </div>

            <div className="form-group">
             <label htmlFor="role">Role :</label>
            <input type="text" id="role" name="role" required value={role} onChange={e=>setRole(e.target.value)
   }  onMouseDown={()=>setValidation(true)}/>
                {role.length===0 && validation && <span className="errorMsg">Please Enter Your Role</span>}
               </div>

            <div className="form-group">
             <label htmlFor="place">Place :</label>
            <input type="text" id="place" name="place" required value={place} onChange={e=>setPlace(e.target.value)
    }  onMouseDown={()=>setValidation(true)} />
                {place.length===0 && validation && <span className="errorMsg">Please Enter Your Place</span>}
               </div>

            <div className="form-group">
            <button className="btn btn-save">update</button>
         <Link to="/" className="btn btn-back">Back</Link>
         </div>
        </form>
      </div>
    )
};
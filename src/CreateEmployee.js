import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateEmployee() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [place, setPlace] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, role, place }),
    })
      .then(() => {
        alert("Employee Added Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="csscontainer">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>ID :</label>
          <input type="text" required value={id}
            onChange={(e) => setId(e.target.value)} onMouseDown={()=>setValidation(true)} />
          {id.length === 0 && validation && <span className="errorMsg">Enter ID</span>}
        </div>

        <div className="form-group">
          <label>Name :</label>
          <input type="text" required value={name}
            onChange={(e) => setName(e.target.value)} onMouseDown={()=>setValidation(true)} />
        </div>

        <div className="form-group">
          <label>Role :</label>
          <input type="text" required value={role}
            onChange={(e) => setRole(e.target.value)} onMouseDown={()=>setValidation(true)} />
        </div>

        <div className="form-group">
          <label>Place :</label>
          <input type="text" required value={place}
            onChange={(e) => setPlace(e.target.value)} onMouseDown={()=>setValidation(true)} />
        </div>

        <div className="form-group">
          <button className="btn btn-save">Save</button>
          <Link to="/" className="btn btn-back">Back</Link>
        </div>

      </form>
    </div>
  );
}

import React from 'react'
import  { useEffect,useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
export default function Signup() {
  let navigate=useNavigate()
  const[ModelCompany,setUsers]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""

  });
  const{firstName,lastName,email,password}=ModelCompany
  const onInputChange=(e)=>{
    setUsers({...ModelCompany,[e.target.name]:e.target.value});
  };
  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",ModelCompany)
     navigate("/Home");
  }
  return (
    <div>
      <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                FirstName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Lastname
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Lastname"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
             <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link> 
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

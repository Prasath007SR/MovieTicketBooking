import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";

export default function Edituser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [ModelCompany, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password:""
  });

  const { firstName, lastName, email,password } = ModelCompany;

  const onInputChange = (e) => {
    setUsers({ ...ModelCompany, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,ModelCompany);
    navigate("/Home");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUsers(result.data);
  };
  return (
    <div>
<Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

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
                LastName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
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
            <Link className="btn btn-outline-danger mx-2" to="/Home">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
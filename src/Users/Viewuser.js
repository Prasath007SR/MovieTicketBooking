import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";

export default function Viewuser() {
  const [user, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

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
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>firstName:</b>
                  {user.firstName}
                </li>
                <li className="list-group-item">
                  <b>lastName:</b>
                  {user.lastName}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>password:</b>
                  {user.password}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/Home"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
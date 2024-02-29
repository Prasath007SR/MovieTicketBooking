import React, { useEffect,useState } from 'react'
import axios from 'axios'
import{Link,useParams} from 'react-router-dom'
import Navbar from '../layout/Navbar';
import './try.css'

export default function Home() {
    const[ModelCompany,setUsers]=useState([]);
    const{id}=useParams();
    useEffect(()=>{
        loadUsers();
    }, []);
    const loadUsers=async () =>{
        const result=await axios.get("http://localhost:8080/getusers");
        setUsers(result.data);
    };
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    };
  return (
    <div>
    <Navbar/>
    <div className='imge'>
    <div className='container'>
        <div className='py-4'>
        <table  id='customers'>
  <thead>
  {/* <style>{"table{tr:nth-child(even) {background-color: #f2f2f2;}}"}</style> */}
    <tr>
    <th scope="col">id</th>
      <th scope="col">firstName</th>
      <th scope="col">lastName</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">Actions</th>
      
    </tr>
  </thead>
  <tbody>
    {
     ModelCompany.map((ModelCompany,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{ModelCompany.firstName}</td>
        <td>{ModelCompany.lastName}</td>
        <td>{ModelCompany.email}</td>
        <td>{ModelCompany.password}</td>
        <td>
           <Link className="btn btn-primary mx-2"
           to={`/viewuser/${ModelCompany.id}`}>View</Link>
           <Link className="btn btn-outline-primary mx-2"
            to={`/editUser/${ModelCompany.id}`}>Edit</Link>
           <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(ModelCompany.id)}
                  >
                    Delete
                  </button>

           </td>
      </tr>

     ))

    }


          </tbody>
         </table>
        </div>
    </div>
    </div>
    </div>
  )
}
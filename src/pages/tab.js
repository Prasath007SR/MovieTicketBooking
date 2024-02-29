import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
import './tab.css';



const DataBase = () => {

  const [travellingguide, setUsers] = useState([]);


  
  useEffect(() => {loadUsers();},[]);

  const loadUsers = async () => {
    const result =await axios.get("http://localhost:8080/games/all");
    setUsers(result.data);
  };  
  const deletetravelling = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/games/deletedetail/${id}`);
      loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

    return (
      <div className='abc123'>
          <div className='heading001'>ADMIN PAGE</div>

        <div className='table123'>
          <div className='table2'>
            <table id="customers">
  <thead>
    <tr>
      <th scope="col">S no</th>

      <th scope="col">place</th>
      <th scope="col">bestroute</th>
      <th scope="col">location</th>
      <th scope="col">entertainment</th>
      <th scope="col">besthotel</th>
      <th scope="col">bestviewpoint</th>
      <th scope="col">bestfood</th>
      <th scope="col">price</th>
      <th scope="col" className='heltab'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      travellingguide.map((user,index) =>  (
        <tr>
        
          <td key={index}>{index+1}</td>
       
          <td>{user.place}</td>
          <td>{user.bestroute}</td>
          <td>{user.location}</td>
          <td>{user.entertainment}</td>
          <td>{user.besthotel}</td>
          <td>{user.bestviewingpoint}</td>
          <td>{user.bestfood}</td>
          <td>{user.price}</td>
          <td>
          <div className='buttons01'>

      <Link className='editbtn' to={`/edit/${user.id}`}>Edit</Link>
      <button
        className='deletebtn'
        onClick={() => deletetravelling(user.id)}
      >
        Delete
      </button>
    </div>
          </td>
        </tr>
      ))
    }

    
  </tbody>
</table>
<button>
<Link to="/post">Adduser</Link>
</button>
</div>
        </div>
        </div>
    );
}

export default DataBase;
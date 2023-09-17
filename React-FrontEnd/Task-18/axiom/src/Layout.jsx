import React from 'react'
import { useState ,useEffect,useRef} from 'react'
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

function Layout() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
   const apiUrl = "http://localhost:4000/user";

  useEffect(() => {
    axios.get(apiUrl)
      .then(function (response) {
       setData(data=>response.data)
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  });

  if(loading) {
    return <div><h1>Loading...</h1></div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }
  const handleEdit = (event,id) => {
    event.preventDefault();
    let indexID= event.target.id;
      let index=Number(indexID)+1;
     navigate(`/Edit/${index}`);
   }
   const handleView = (event,id) => {
    event.preventDefault();
    let indexID= event.target.id;
      let index=Number(indexID)+1;
     navigate(`/view/${index}`);
   }
   const handleDel = (event,id) => {
    event.preventDefault();
    let indexID= event.target.id;
      let index=Number(indexID)+1;
    const record=data[indexID];
    alert(`User details of ${record.name} is deleted`);
           axios
        .delete(`http://localhost:4000/user/${index}`)
        .then((response) => {
          setData((previousState) => {
            return previousState.filter((_) => _.id !== index);
          });});
         
   }
  return (
    <>
    
    <div className='container'> 
    
     <div className='row' id='data'> {data.map((value,index)=>(
        <div className="col-sm-12 py-2">
   <table class="table table-hover table-primary">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Company Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.cname}</td>
   <td>
    <button className='btn btn-primary' id={index} onClick={(event,id) => handleView(event,id)} >View</button>
        <button className='btn btn-primary' id={index} onClick={(event,id) => handleEdit(event,id)} >Edit</button>
        <button className='btn btn-primary' id={index} onClick={(event,id) => handleDel(event,id)} >Delete</button>
     </td> </tr>
          </tbody>
        </table>
      </div>
    ))}</div></div>
    </>
  )
  }

export default Layout
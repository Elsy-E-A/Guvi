import React from 'react'
import { useState ,useEffect,useRef} from 'react'
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate,useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'


function Author() { const [count, setCount] = useState(0)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   
    const apiUrl = "http://localhost:4000/author";

    const { index} = useParams();
   console.log(index);
    const navigate = useNavigate();
   
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
     navigate(`/authorEdit/${index}`);
   }
   const handleDel = (event,id) => {
    event.preventDefault();
    let indexID= event.target.id;
      let index=Number(indexID)+1;
    const record=data[indexID];
    alert(`Details of ${record.author} is deleted`);
           axios
        .delete(`http://localhost:4000/author/${index}`)
        .then((response) => {
          setData((previousState) => {
            return previousState.filter((_) => _.id !== index);
          });});
         
   }
   
  return (
    <div className='container'> 
    
     <div className='row' id='data'> {data.map((value,index)=>(
        <div className="col-sm-12 py-2">
        <table class="table table-hover table-primary">
       <thead>
         <tr>
           <th scope="col">Id</th>
           <th scope="col">Author Name</th>
           <th scope="col">Date of Birth</th>
           <th scope="col">Short Bio</th>
           <th scope="col">Actions</th>
         </tr>
       </thead>
       <tbody>
         <tr>
            <td>{value.id}</td>
           <td>{value.author}</td>
           <td>{value.dob}</td>
           <td>{value.bio}</td>
            <td>
             <button className='btn btn-primary' id={index} onClick={(event,id) => handleEdit(event,id)} >Edit</button>
             <button className='btn btn-primary' id={index} onClick={(event,id) => handleDel(event,id)} >Delete</button>
          </td> </tr>
               </tbody>
             </table>
           </div>))}</div></div>
  )
}

export default Author
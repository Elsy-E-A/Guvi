import React from 'react'
import { useState ,useEffect,useRef} from 'react'
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate,useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

function View() { const [count, setCount] = useState(0)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const nameRef=useRef('');
    const unameRef=useRef('');
    const emailRef=useRef('');
    const streetRef=useRef('');
    const suiteRef=useRef('');
    const cityRef=useRef('');
    const zipRef=useRef(''); 
    const latRef=useRef('');
    const lngRef=useRef('');
    const phoneRef=useRef('');
    const webRef=useRef('');
    const cnameRef=useRef('');
    const phraseRef=useRef('');
    const bsRef=useRef('');
    const apiUrl = "http://localhost:4000/user";

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
     navigate(`/Edit/${index}`);
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
   const fdata=data.filter((item) => {
    if(item.id==index)
    return item;
       })
  
  return (
    <div className='container'> 
    
     <div className='row' id='data'> {fdata.map((value,index)=>(
        <div className="col-sm-12 py-2">
    <div className="card h-100 text-white bg-primary" key={index}>
      <div className="card" id='card'>
        <h5 className="card-text">Name: {value.name}</h5>
        <h5 className="card-text">Username: {value.username}</h5>
        <h5 className="card-text">Email: {value.email}</h5>
        <h5 className="card-text">Street: {value.street}</h5>
        <h5 className="card-text">Suite: {value.suite}</h5>
        <h5 className="card-text">City: {value.city}</h5>
        <h5 className="card-text">Zipcode: {value.zip}</h5>
        <h5 className="card-text">Latitude: {value.lat}</h5>
        <h5 className="card-text">Longitude: {value.lng}</h5>
        <h5 className="card-text">Phone: {value.phone}</h5>
        <h5 className="card-text">Website name: {value.website}</h5>
        <h5 className="card-text">Company name: {value.cname}</h5>
        <h5 className="card-text">Catch Phrase: {value.catchPhrase}</h5>
        <h5 className="card-text">BS: {value.bs}</h5>
      
        <div className='card-text'>
        <button className='btn btn-primary' id={index} onClick={(event,id) => handleEdit(event,id)} >Edit</button>
        <button className='btn btn-primary' id={index} onClick={(event,id) => handleDel(event,id)} >Delete</button>
       </div></div>
    </div></div>))}</div></div>
  )
}

export default View
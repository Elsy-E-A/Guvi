import { useRef ,useEffect,useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Add() {
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
  
    const navigate = useNavigate();
   const addFruitHandler = () => {
       var payload = {
      name: nameRef.current.value,
      username: unameRef.current.value,
      email: emailRef.current.value,
      street: streetRef.current.value,
      suite: suiteRef.current.value,
      city: cityRef.current.value,
      zipcode: zipRef.current.value,
      lat: latRef.current.value,
      lng: lngRef.current.value,
      phone: phoneRef.current.value,
      website: webRef.current.value,
      cname: cnameRef.current.value,
      catchPhrase: phraseRef.current.value,
      bs: bsRef.current.value,
    };
    axios.post("http://localhost:4000/user", payload).then(() => {
      navigate("/");
      alert("User details are added");
          });
          
  };

  return (
    <>
      <legend>Add New User</legend>
      <form id="crudForm" onSubmit={addFruitHandler} >
    <div class="container">
    <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder='Enter Name' ref={nameRef} id='name' required></input>
    </div>
  </div>
  <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">User Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder='Enter UserName' ref={unameRef} id='uname' required></input>
    </div>
  </div>
  <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder='abc@email.com' ref={emailRef} id='email' required></input>
    </div>
  </div>
  <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Address</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder='Enter Street' ref={streetRef} id='street' required></input><br/>
      <input type="text" class="form-control" placeholder='Enter suite' ref={suiteRef} id='suite' required></input><br/>
      <input type="text" class="form-control" placeholder='Enter city' ref={cityRef} id='city' required></input><br/>
      <input type="text" class="form-control" placeholder='Enter zipcode' ref={zipRef} id='zip' required></input>
    
    </div>
  </div>
  <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Geo</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder='Enter Latitude' ref={latRef} id='lat' required></input><br/>
      <input type="text" class="form-control" placeholder='Enter Longtitude' ref={lngRef} id='lng' required></input>
       </div>
  </div>
  <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder='Enter Phone Number' ref={phoneRef} id='phone' required></input><br/>
    </div>
  </div>
  <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Website</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder='Enter Website' ref={webRef} id='web' required></input>
    </div>
  </div>
  <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Company</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder='Enter Company Name' ref={cnameRef} id='cname' required></input><br/>
      <input type="text" class="form-control" placeholder='Enter Catch Phrase' ref={phraseRef} id='phrase' required></input><br/>
      <input type="text" class="form-control" placeholder='Enter BS' ref={bsRef} id='bs' required></input><br/>
   </div>
  </div>
    <div className='row'>
    <div class="col">
    <div class="form-group">
    <button type="submit" class="btn btn-primary">Save</button>
    </div></div>
  </div>  
    </div></form>
    </>
  );
}

export default Add
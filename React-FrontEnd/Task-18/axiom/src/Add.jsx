import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Add() {
  const [data,setData]=useState({});
  const apiUrl = "http://localhost:4000/user";
  axios.get(apiUrl)
  .then(function (response) {
   setData(data=>response.data)
     console.log(data);
  })
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
  const handleClick = (event) => {
    event.preventDefault();
    let tid=data.length+1;
   let tname=event.target.name;
    let tuser=event.target.uname;
    let temail=event.target.email;
    let tstreet=event.target.street;
    let tsuite=event.target.suite;
    let tcity=event.target.city;
    let tzip=event.target.zip;
    let tlat=event.target.lat;
    let tlng=event.target.lng;
    let tphone=event.target.phone;
    let tweb=event.target.web;
    let tcname=event.target.cname;
    let tphrase=event.target.phrase;
    let tbs=event.target.bs;
    let names={id:tid,
      name:tname.value,
      username:tuser.value,
      email:temail.value,
      street:tstreet.value,
      suite:tsuite.value,
      city:tcity.value,
      zip:tzip.value,
      lat:tlat.value,
      lng:tlng.value,
      phone:tphone,
      website:tweb.value,
      company:tcname.value,
      catchPhrase:tphrase.value,
      bs:tbs.value};
    setData(...current=>current,names);
    axios.post("http://localhost:4000/user", {
      id:tid,
      name:tname.value,
      username:tuser.value,
      email:temail.value,
      address?.street:tstreet.value,
      suite:tsuite.value,
      city:tcity.value,
      zip:tzip.value,
      lat:tlat.value,
      lng:tlng.value,
      phone:tphone,
      website:tweb.value,
      company:tcname.value,
      catchPhrase:tphrase.value,
      bs:tbs.value
    })
    .then((response) => {
      console.log(response);
    });
   }


  return (
       <div className='container'>
        <form id='crudForm'  onSubmit={(event,id) => handleClick(event)}> 
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
    </div>
        </form>
    </div>
  )
}

export default Add
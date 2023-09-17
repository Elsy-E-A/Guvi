import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
function Edit() {
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
 
  const { index} = useParams();
 console.log(index);
  const navigate = useNavigate();
 
  useEffect(() => {
    axios.get(`http://localhost:4000/user/${index}`).then((response) => {
      console.log(response.data);
      nameRef.current.value = response.data.name;
     unameRef.current.value= response.data.username;
     emailRef.current.value= response.data.email;
     streetRef.current.value= response.data.street;
     suiteRef.current.value= response.data.suite;
     cityRef.current.value= response.data.city;
      zipRef.current.value= response.data.zipcode;
     latRef.current.value= response.data.lat;
     lngRef.current.value= response.data.lng;
    phoneRef.current.value= response.data.phone;
      webRef.current.value= response.data.website;
     cnameRef.current.value= response.data.cname;
     phraseRef.current.value= response.data.catchPhrase;
     bsRef.current.value= response.data.bs;
    });
  }, []);
 
  const updateFruitHandler = () => {
    var payload = {
    id:{index},
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
    axios.put(`http://localhost:4000/user/${index}`, payload).then((response) => {
        navigate("/");
   alert("User details are updated")
          });
  };
 
  return (
    <>      <legend>Add New User</legend>
    <form id="crudForm" onSubmit={updateFruitHandler} >
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
export default Edit;
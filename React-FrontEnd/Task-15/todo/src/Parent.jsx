import React, { useEffect, useRef, useState } from 'react'

function Parent(props) {
  const nameRef=useRef('');
  const desRef=useRef('');
  const [fname,setFname]=useState('');
  const [fdes,setFdes]=useState('');
  console.log(props.filterData);
   const [data , setData] = useState([{name:"Office Task-1", des:"This is my First Task" ,status:"Not Completed"},
 {name:"Office Task-2", des:"This is my Second Task" ,status:"Completed"},
{name:"Office Task-3", des:"This is my Third Task" ,status:"Not Completed"}]);

let fdata={};
if(props.filterData=='All'){
   fdata=data.map((value,index) => {
    return value;
  });
}
else{
fdata=data.filter(employee => {
  return employee.status === props.filterData;
});}

  const handleClick = (event) => {
    event.preventDefault();
   let tname=event.target.name;
    let tdes=event.target.des;
    let names={name:tname.value,des:tdes.value,status:"Not Completed"};
   
 setData(current => [...current,names]);
 console.log(data);
 nameRef.current.value=fname;
 desRef.current.value=fname;
   }
   const handleStatus = (event,id) => {
    event.preventDefault();
    let nstat= document.querySelector('#stat');
    let indexID=event.target.name;
    let names=data.map((item,index)=>{
      if(index==indexID){
        item.status=nstat.value;
        console.log(item.status);
      }
      return item;
    });
    setData(names);
    console.log(data);
    return console.log(document.querySelector('#stat').value=nstat.value);
  }

   const handleEdit = (event,id) => {
    event.preventDefault();
    let index= event.target.id;
    const record=data[index];
    console.log(record.name);
   nameRef.current.value=record.name;
   desRef.current.value=record.des;
   data.splice(index,1);
   }
   const handleDel = (event,id) => {
    event.preventDefault();
    let index= event.target.id;
        console.log(index);
    let temp=[...data];
        temp.splice(index,1);
      setData(data=>temp);
   }
  return (
    <div className='container'>
<form id="crudForm" onSubmit={(event,id) => handleClick(event)} >
    <div class="container">
  <div class="row">
    <div class="col">
    <div class="form-group">
       <input type="text" class="form-control" placeholder='Todo Name' ref={nameRef} id='name' required />
        </div>
    </div>
    <div class="col">
    <div class="form-group">
        
          <input type="text" class="form-control" placeholder='Todo Description' ref={desRef} id='des' required />
        </div>
    </div></div>
   
    <div className='row'>
    <div class="col">
    <div class="form-group">
    <button type="submit" class="btn btn-primary">Add Todo</button>
    </div></div>
  </div>  
    </div></form>       
    <div className='row' id='data'> {fdata.map((value,index)=>(
        <div className="col-sm-4 py-2">
    <div className="card h-100 text-white bg-primary" key={index}>
      <div className="card">
        <h5 className="card-title">Name: {value.name}</h5>
        <h6 className="card-text">Description : {value.des}</h6>
        <div className='row'>
    <div class="col">
    <div class="form-group">
    <select class="form-select" id='stat' name={index} onChange={(event,id) => handleStatus(event,id)}>
   
  <option name='stat' value={value.status=='Not Completed' ? 'Completed' : 'Not Completed'} >{value.status=='Completed' ? 'Completed' : 'Not Completed'}</option>
  <option name='stat' value={value.status=='Not Completed' ? 'Completed' : 'Not Completed'}>{value.status=='Not Completed' ? 'Completed' : 'Not Completed'}</option>
 
 </select>
            </div>
    </div></div>
        <div className='card-footer'>
        <button className='btn btn-primary' id={index} onClick={(event,id) => handleEdit(event,id)} >Edit</button>
        <button className='btn btn-primary' id={index} onClick={(event,id) => handleDel(event,id)} >Delete</button>
      </div></div>
    </div></div>))}</div>
    </div>
  )
}

export default Parent
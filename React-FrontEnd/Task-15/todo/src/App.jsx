import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'


function App() {
 
  const [filterData,setFilterData]=useState('All')  
  return (
    <>
     <div id='main'>
    <header>
      <div><p>My Todo</p></div>
     </header>
    <section  >
      
    <form id="sForm" >
 
      <div className='container' style={{overflow:'auto'}}></div>
      <div class="form-group">
    <select class="form-select" id='mainStat' onChange={(event,id) => (
      setFilterData(filterData=>document.querySelector('#mainStat').value)
    )} >
   
  <option value={'All'} selected>All</option>
  <option value={'Not Completed'} >Not Completed</option>
  <option value={'Completed'} > Completed</option>
 </select>
            </div>
            </form>
            <Parent filterData={filterData}></Parent>
  </section></div>
     </>
  )
}

export default App

import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Layout from './Layout';
import Add from './Add';
import Edit from './Edit'
import View from './View'

function App() {
 
  
  return (
    <>
    <Router>
    <nav className='navbar navbar-expand-lg navbar-light-bg-light'>
       <div className="container px-4 px-lg-5">
                <h4>User Management</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!"> <Link to="/">Home</Link></a></li>
                       
                    </ul>
                    <Link to='/add'>  <button className='btn btn-primary'>Add user</button></Link>
                </div>
            </div>
       </nav>
       <Routes>
       <Route path="/" Component={Layout}></Route> 
               <Route path="/add" Component={Add}></Route> 
                <Route path="/Edit/:index" Component={Edit}></Route>
                <Route path="/view/:index" Component={View}></Route>
      
       </Routes>
       </Router>
     </>
  )
}

export default App

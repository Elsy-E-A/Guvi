import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Course from './Course'
import All from './All'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Blog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Courses</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Practice</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                               
                               
                                <li><a className="dropdown-item" href="#!">Codeketa</a></li>
                                <li><a className="dropdown-item" href="#!">Webkata</a></li>
                                <li><a className="dropdown-item" href="#!">Zen Class</a></li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </div></nav>
            <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder" >
                    <img className="card-img-top" src='https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-1536x236.png' alt="" />
      Blog</h1>
                     </div>
            </div>
        </header>
        <Router>
      <div class="text-center">
      <nav className="navbar navbar-expand-sm bg-light justify-content-center" id='cor'>          
      <div className="container px-4 px-lg-5">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" >
                        <li className="nav-item"><a className="nav-link text-secondary fw-bold" aria-current="page" href="#!"> <Link to="/">All</Link></a></li>
                        <li className="nav-item"><a className="nav-link text-secondary fw-bold" aria-current="page" href="#!">  <Link to="/course/full">Full </Link></a></li>
                        <li className="nav-item"><a className="nav-link text-secondary fw-bold" aria-current="page" href="#!">    <Link to="/course/data">Data</Link></a></li>
                        <li className="nav-item"><a className="nav-link text-secondary fw-bold" aria-current="page" href="#!"> <Link to="/course/cyber">Cyber</Link></a></li>
                     </ul>
                    </div>
                    </div>
        </nav>
        
        <Routes>
        <Route path="/" Component={All}></Route> 
               <Route path="/course/:name" Component={Course}></Route> 
        </Routes>
        </div>
    </Router>
   
    </>
  )
}

export default App

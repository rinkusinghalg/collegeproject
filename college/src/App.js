import logo from './logo.svg';
import './App.css';
import React from 'react-dom'
import { BrowserRouter,Routes,Route,NavLink,Link } from 'react-router-dom';
import Home from './component/Home';
import Create from './component/Create';
import Update from './component/Studentdata';
import About from './component/About';
import Search from './component/Search';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Studentdata from './component/Studentdata';
import Faq from './component/Faq';
import Addmission from './component/Addmission';
import Addmit from './component/Addmit';
import Supdate from './component/Supdate';


function App() {
  return (
    <div className="App">
      
    
    
      <BrowserRouter>



      <Navbar bg="warning" expand="lg" sticky="top" >
    
      <Container>
     
        <Navbar.Brand href="#home"><abbr  >A C E T Aligarh</abbr></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavLink className="navbar" to="/" >Home</NavLink>
            <NavLink className="navbar" to="/create" > New Registration</NavLink>
            <NavLink className="navbar" to="/addmission" >Addmission</NavLink>
            <NavLink className="navbar" to="/studentdata" > Registration data</NavLink>
            <NavLink className="navbar" to="/addmit" >  Addmission data</NavLink>
            <NavLink className="navbar" to="/about" > About</NavLink>
            <NavLink className="navbar" to="/faq">Faq</NavLink>
           
            <NavLink className="navbar" to="/search"> Search</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      
      </Container>
      </Navbar>
    
 
   <Routes>
    <Route path="/create" element={<Create/>}></Route>
    <Route path="/studentdata" element={<Studentdata/>}></Route> 
    <Route path="/about" element={<About/>}></Route>
    <Route path="/search" element={<Search/>}></Route>
    <Route path="/faq" element={<Faq/>}></Route>
    <Route path="/addmission" element={<Addmission/>}></Route>
    <Route path="/addmit" element={<Addmit/>}></Route>
    <Route path="/update/:id" element={<Supdate/>}></Route>
    <Route exact path="/" element={<Home/>}></Route>
    </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

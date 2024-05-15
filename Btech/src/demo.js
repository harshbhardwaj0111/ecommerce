// import { useState } from 'react';
// import  './App.css'
// import Example2 from './Example2';
// import go from 'C:/Users/hp/Desktop/welcome.jpg';
// import Header from './Header';
// import User from './User';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import Card from 'react-bootstrap/Card';
// import Component_eg from './Component_eg';
// function App()
// {
//   {/* let [data,setdata]=useState(10);
//   let [data2,setdata2]=useState(20);
//   let [sum,setsum]=useState(); */}
//   let [a,setA]=useState(50);
//   {/* function showdata()
//   {
//     setsum(data+data2);
//   } */}
//   function print()
//   {
//     setA(a+1);
//   }
//   function showvalue(e)
//   {
//     setA(e.target.value);
//   }
//   console.log("function component rerender");
//   return(
//     <div>
//       <Header/>
//       {/* <Button variant="success">Submit</Button> 
//       <Button variant="warning">Warning</Button>

//       <Alert  variant="warning">
//           This is a   alert—check it out!
//         </Alert>

//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={go} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="danger">Go somewhere</Button>
//       </Card.Body>
//     </Card> */}
//     <Component_eg />
//        {/* <User name="Harsh" age="21" address="Ellenabad" /> */}
//       {/* <Example2/> */}
//       {/* <h2>Here is first data:{data}</h2>
//       <h2>Here is second data:{data2}</h2>
//       <h1 style={{color:"green"}}>{sum}</h1>
//       <button onClick={()=>showdata()}>Click</button> */}
//       {/* <h2 style={{backgroundColor:"royalblue"}}>This is used for target event example,the data is{a}</h2> */}
//       {/* <input type='text' onChange={(e)=>showvalue(e)} /> */}
//        {/* <button onClick={print}>value</button>  */}
//     </div>

//   )
// }

// export default App;


import Login from "./Login";
import About from "./About";
import Home from "./Home";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import './App.css'
function App()
{
  return (
   <div>
    
    <Router>
    
    <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link}  to="/">Home</Nav.Link>
            <Nav.Link  as={Link}  to="/path2">About</Nav.Link>
            <Nav.Link  as={Link} to="/path3">Login</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
            <Routes>
    <Route path="/" element={ <Home />} />
     
    <Route path="/path2" element={<About />} />
    <Route path="/path3" element={<Login />} />      
    </Routes>
    {/* <Link to="/">Home</Link> &nbsp;
    <Link to="/path2">About</Link>&nbsp;
    <Link to="/path3">Login</Link>&nbsp; */}
    </Router>
   
   </div>
  )
}
export default App;
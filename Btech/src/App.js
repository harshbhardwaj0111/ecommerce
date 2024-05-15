import './App.css';
// import Home from './Home';
// import About from './About';
//import Login from './Login';
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import Header1 from './Header1';
import StudentMap from './StudentMap';
import MyCard from './MyCard';
import UseEffectEg from './UseEffectEg';
import Harsh from './Harsh.JPG';
import Dipesh from './Dipesh.JPG';
import ListEx from './ListEx';
import { Button } from 'react-bootstrap';
import MyModal from './MyModal';
import { useEffect, useState } from 'react';
import MyApiEg from './MyApiEg';
import MyApiEg2 from './MyApiEg2';
import MyApiEg3 from './MyApiEg3';
import MyLogin from './MyLogin';
import Sliders from './Sliders';
import Home2 from './Home2';
import Footer from './Footer';
import About from './About';
import Header from './Header';
import SoftechSlider from './SoftechSlider';
import AboutSoftech from './AboutSoftech';
import SoftechFooter from './SoftechFooter';
function App()
{
  return(
    <div>
      <Header />
      <SoftechSlider />
      <AboutSoftech />
      <SoftechFooter /> 

      
     {/* <Home2 />
     <Sliders />
     <About />*/}

      {/* <Header1 />
      <UseEffectEg />
      
      <MyModal image={Harsh} />
      <MyApiEg />
      <MyApiEg2 /> */}

      {/* <ListEx /> */}
      {/* <StudentMap name="Harsh" src={Harsh} contact="100200" /> 

      <Router>
      <Link to="/home" >Home</Link> &nbsp;
      <Link to="/about" >About</Link>&nbsp;
      <Link to="/login" >Login</Link>&nbsp;
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
         
      </Routes>
      </Router> /> */}
    </div>
  )
}
export default App;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import About from './About';
import Login from './Login';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Route, BrowserRouter as Router, Routes ,Link } from 'react-router-dom';
function Header1()
{
    return(
        <Router>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container >
            <Nav className="Head1" >
            <Nav.Link as={Link} to="home" >Home</Nav.Link>
            <Nav.Link as={Link} to="about">About us</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact us</Nav.Link>
            <Nav.Link as={Link} to="login">login</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        {/* <Breadcrumb>
            <Breadcrumb.Item active as={Link} to="home">Home</Breadcrumb.Item>
            <Breadcrumb.Item active as={Link} to="login">Login</Breadcrumb.Item>
            <Breadcrumb.Item active as={Link} to="about">About</Breadcrumb.Item>
        </Breadcrumb> */}
        <Routes>
            <Route path="home" element={ <Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<About />} />
            <Route path="login" element={<Login />} />      
        </Routes>
        </Router>
    )
}
export default Header1;

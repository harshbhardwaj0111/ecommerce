import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Shoe from './Shoe.jpg';
import {Nav,NavLink} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer()
{
    return(
        <footer>
            <Container fluid>
                <Row className='bg-dark text-white p-4'>
                    <Col mx='5'>
                        <Image src={Shoe} width={150} height={150} rounded />
                        <h3>MEHTA SHOE CAMP</h3>
                        <p>"Step into Timeless Style"</p>                        
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <h3><u>UseFull Links</u></h3>
                            <NavLink href="#home" className='text-white'>Home</NavLink>
                            <NavLink href="#about" className='text-white'>About us</NavLink>
                            <NavLink href="#login" className='text-white'>Login</NavLink>
                            <NavLink href="#sign" className='text-white'>Sign up</NavLink>
                        </Nav>
                    </Col>
                    <Col>  
                        <h3><u>Contact Information</u></h3>
                        <p><FontAwesomeIcon icon={faLocationDot} /> #64,Suvidha Marg Sirsa(125055)</p>
                        <p>ABc Mehta <FontAwesomeIcon icon={faPhone} /> +91 999xxxxx</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> mehtashoe123@gmail.com</p>
                        <p>Shop Timing(9:00 AM to 8:00 PM)</p>
                        <p><FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faFacebook} /> 
                        &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTwitter} /></p>
                    </Col>
                </Row>
                <Row className='bg-success text-white p-4'>
                    <Col><p ><u>© 2024 All Rights are Reserved.AUCODE</u></p></Col>
                    <Col><p className="float-end"><a href="#" style={{color:'black'}}>Back to top</a></p></Col>
                </Row>
                
            </Container>
        </footer>
    )
}
export default Footer;
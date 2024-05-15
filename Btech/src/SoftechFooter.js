import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import SoftechLogo from './SoftechLogo.jpg'
import {Nav,NavLink} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp, faEnvelope,faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function SoftechFooter()
{
    return(
        <footer>
            <Container fluid>
                <Row className='bg-dark text-white p-4'>
                    <Col mx='5'>
                        <Image src={SoftechLogo} width={150} height={150} rounded />
                        <h3>SOFTECH INFOWAYS</h3>
                        <p>“Learn to code, learn to change the world.”</p>                        
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
                        <p>Gagan Goyal<FontAwesomeIcon icon={faPhone} /> +91 99966-70050</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> info@gmail.com</p>
                        <p>Business Hours(9:00 AM to 7:00 PM)</p>
                        <p><FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faFacebook} /> 
                        &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTwitter} /></p>
                    </Col>
                </Row>
                <Row className='bg-success text-white p-4'>
                    <Col><p ><u>© 2024 All Rights are Reserved.</u></p></Col>
                    <Col><p className="float-end"><a href="#" style={{color:'black'}}><FontAwesomeIcon icon={faCircleUp} />Back to top</a></p></Col>
                </Row>
                
            </Container>
        </footer>
    )
}
export default SoftechFooter;
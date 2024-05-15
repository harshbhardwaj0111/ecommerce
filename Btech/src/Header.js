import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image ,InputGroup} from 'react-bootstrap';
import SoftechLogo from './SoftechLogo.jpg'
import AboutSoftech from './AboutSoftech';
function Header()
{
    return(
        <div>
            <h2 style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", textAlign:"center"}}><Image src={SoftechLogo} rounded width={50} height={50} /> Softech Infoways</h2>
            <nav>
                <a href="#home"> Home </a>
                <a href="#student"> Student Corner </a>
                <a href="#about"> About us </a>
                <a href="#contct"> Contact us </a>
                <a href="#login"> Login </a>
                <Form inline>
                <Row>
                    <Col xs="auto">
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearchengin} /></InputGroup.Text>
                        <Form.Control 
                            type="text" 
                            placeholder="Search..."
                            className=" mr-sm-2 " 
                        />
                        </InputGroup>
                    </Col>
                </Row>
                </Form>
            </nav>
        </div>
    )
}

export default Header;
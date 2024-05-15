import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from 'C:/Users/hp/Desktop/images.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Component_eg()
{
    return(
        <div>
            <Button variant='warning'>Warning</Button>
            <Button variant='primary'>Primary</Button>
            <Button variant='success'>Success</Button>
            <Button variant='info'>Info</Button>
            <Button variant='light'>Light</Button>
            <Button variant='dark'>Dark</Button>

            <Alert variant='warning'>My name is Harsh</Alert>

            <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
            </Navbar>

            <Container>
            <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
            <Card.Title>JCDMCOE</Card.Title>
            <Card.Text>Thi is the official logo of jcd memorial college of eng.</Card.Text>
            <Button variant="danger">Click</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
            <Card.Title>JCDMCOE</Card.Title>
            <Card.Text>Thi is the official logo of jcd memorial college of eng.</Card.Text>
            <Button variant="danger">Click</Button>
            </Card.Body>
            </Card>
            </Col><Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
            <Card.Title>JCDMCOE</Card.Title>
            <Card.Text>Thi is the official logo of jcd memorial college of eng.</Card.Text>
            <Button variant="danger">Click</Button>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Component_eg;
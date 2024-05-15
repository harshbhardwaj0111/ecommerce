import Card from 'react-bootstrap/Card';
import Harsh from './Harsh.JPG';
import Dipesh from './Dipesh.JPG';
import ListGroup from 'react-bootstrap/ListGroup';
import Himansh from './Himansh.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function MyCard()
{
    const student=[
        {
            "name":"Harsh",
            "email":"harsh@123gmail.com",
            "photo":Harsh,
            "stream":"BTech",
            "contact":1234569,
        },
        {
            "name":"Dipesh",
            "email":"Dipesh@123gmail.com",
            "photo":Dipesh,
            "stream":"BA",
            "contact":4034569,
        },
        {
            "name":"Rupesh",
            "email":"Rupesh@123gmail.com",
            "photo":Himansh,
            "stream":"1st class",
            "contact":89220569,
        }
    ]
    return(
        <Container>
        <Row>
            {
            student.map((data)=>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.photo} />
            <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
            <ListGroup.Item>{data.email}</ListGroup.Item>
            <ListGroup.Item>{data.contact}</ListGroup.Item>
            <ListGroup.Item>{data.stream}</ListGroup.Item>
            </ListGroup>
            </Card></Col> )
            }
        
        </Row>
        </Container>
    )
}
export default MyCard;
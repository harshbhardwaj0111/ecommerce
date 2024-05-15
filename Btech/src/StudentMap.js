import { Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
function StudentMap(props)
{
    // const student=[
    //     {
    //         "name":"Harsh",
    //         "email":"harsh@123gmail.com",
    //         "contact":1234569,
    //     },
    //     {
    //         "name":"Harshit",
    //         "email":"harshit@123gmail.com",
    //         "contact":4034569,
    //     },
    //     {
    //         "name":"Rupesh",
    //         "email":"Rupesh@123gmail.com",
    //         "contact":89220569,
    //     }
    // ]
    // student.map((data)=>
    // {
    //     console.log("name is in loop ",data);
    // })
    return(
        <div>
            <Table striped bordered hover variant="dark">
            <thead><tr><th>Name</th><th>Image</th><th>Contact</th></tr></thead>
            <tbody>
            {
            // student.map((data)=>
            // <Container>
            // <Row>
            // <Col>Name is: {data.name}</Col>
            // <Col>Email is: {data.email}</Col>
            // <Col>Contact is: {data.contact}</Col>
            // </Row>
            // </Container>
            
                <tr><td>{props.name}</td><td>
                    <img id="img3" src={props.src} width={40} height={40}/>
                    
                    </td><td>{props.contact}</td></tr>
            // )
            }
            </tbody>
            </Table>
        </div>
    )
}

export default StudentMap;
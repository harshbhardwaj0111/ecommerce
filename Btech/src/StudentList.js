import { Button, Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
function StudentList()
{
    const[student,studentList]=useState([]);
    const[id,setId]=useState();
    const[email,setEmail]=useState();
    const[fn,setFn]=useState();
    const[ln,setLn]=useState();
    const[pic,setPic]=useState();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    useEffect(()=>
    {
        fetch("https://reqres.in/api/users").then((response)=>{
            return response.json();
        }).then((result)=>{
            console.log("Result is:",result.data);
            studentList(result.data);
        })
    },[])
    function forName(e)
    {
        e.preventDefault()
        const record={
            method:'POST',
            body:JSON.stringify({
                "Email":email,
                "First_name":fn,
                "Last_name":ln,
                "Avatar":pic
            }),
            headers:{
                'Content-type': 'application/json'
            }
        }
        fetch('https://reqres.in/api/users',record).then((response)=>response.json())
        .then((result)=>{console.log("Data is stored.")})
        handleClose();
    }
    function myData(e)
    {
        e.preventDefault();
        const record={
            method:"DELETE",
            
        }
        fetch("https://reqres.in/api/users/2",record)
        .then((response)=>{return response.json()})
        .then((data)=>{console.log("data is updated.")})
    }
    return(
        <div>
             <Table striped bordered hover variant="dark">
            <thead>
                <tr><th>ID</th><th>Email</th><th>First_name</th><th>Last_name</th><th>Avatar</th></tr>
            </thead>
            <tbody>
                {
                    student.map((item)=>
                    <tr><td>{item.id}</td><td>{item.email}</td>
                    <td>{item.first_name}</td><td>{item.last_name}</td>
                    <td>{item.avatar}</td></tr>
                )
                }
            </tbody>
            </Table>
            <center><Button onClick={handleShow2} variant="success">DELETE</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button  onClick={handleShow} variant="warning">+Add New Person</Button></center>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter the Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form  align="center">
                    Email : <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /><br />
                    First_name : <input type="text" placeholder="Enter your first_name" onChange={(e)=>setFn(e.target.value)} /><br />
                    Last_name : <input type="text" placeholder="Enter your last_name" onChange={(e)=>setLn(e.target.value)} /><br />
                    Avatar : <input type="file" placeholder="Enter your Picture" onChange={(e)=>setPic(e.target.value)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={forName} >Save Changes</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleClose2} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter the Id whose data you want to Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Id : <input type="text" placeholder="Enter your Id" onChange={(e)=>setId(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>Close</Button>
                    <Button variant="primary" onClick={myData} >DELETE</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default StudentList;
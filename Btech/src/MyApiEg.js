import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
function MyApiEg()
{
    const[student,studentList]=useState([]);
    const [name,setName]=useState()
    useEffect(()=>
    {
        fetch("https://reqres.in/api/users").then((response)=>{
            return response.json();
        }).then((result)=>{
            console.log("Result is:",result.data);
            studentList(result.data);
        })
    },[])
    function Register()
    {
        const requestObj={
            method: 'POST',
            body: JSON.stringify({
              
               "name":"jfhu" ,"course":"kirfre"
                
            }),
            headers: {
               'Content-type': 'application/json',
            },
            }
             
            fetch('https://reqres.in/api/users',requestObj)
            .then((response) => { return response.json()})
            .then((result) => {
               console.log("you have register successfully",result)
            })
    }
    return(
        <div>
            <Table striped bordered hover variant="primary">
            <thead><tr><th>Name</th><th>email</th><th>first_name</th><th>last_name</th><th>Avatar</th></tr></thead>
            <tbody>
            {
                student.map((item)=>
                <tr><td>{item.id}</td><td>{item.email}</td><td>{item.first_name}</td><td>{item.last_name}</td><td>{item.avatar}</td></tr>
            )
            }
            </tbody>
            </Table>
            <form>
                <input type="text" placeholder="enter first name" onChange={(e)=>setName(e.target.value)} />
            </form>
            <button onClick={()=>Register()} >Register</button>
        </div>
    )
}
export default MyApiEg;
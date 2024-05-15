import { useState } from "react";

function MyApiEg2()
{
    const[Name,setName]=useState();
    const[Course,setCourse]=useState();
    const[Degree,setDegree]=useState();
    // function show()
    // {
    //     const record={
    //         method:'POST',
    //         body:JSON.stringify({
    //             "name":"Harsh","Course":"Btech"
    //         }),
    //         headers:{
    //             'Content-type': 'application/json'
    //         }
    //     }
    //     fetch('https://reqres.in/api/users',record).then((response)=>response.json())
    //     .then((result)=>{console.log("Data is stored.")})
    // }
    function forName(e)
    {
        e.preventDefault()
        const record={
            method:'POST',
            body:JSON.stringify({
                "name":Name,
                "course":Course,
                "degree":Degree
            }),
            headers:{
                'Content-type': 'application/json'
            }
        }
        fetch('https://reqres.in/api/users',record).then((response)=>response.json())
        .then((result)=>{console.log("Data is stored.")})
    }
    return(
        <div>
            {/* <button onClick={()=>show()} >Register</button> */}
            <form onSubmit={forName}>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} /><br />
                <input type="text" placeholder="Enter your couse" onChange={(e)=>setCourse(e.target.value)} /><br />
                <input type="text" placeholder="Enter your degree" onChange={(e)=>setDegree(e.target.value)} /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default MyApiEg2;
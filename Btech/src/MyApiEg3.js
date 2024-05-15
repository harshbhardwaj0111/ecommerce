import { useState } from "react";

function MyApiEg3()
{
    const[Name,setName]=useState();
    const[Course,setCourse]=useState();
    const[Degree,setDegree]=useState();
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
            {/* <form onSubmit={myData}>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} /><br />
                <input type="text" placeholder="Enter your couse" onChange={(e)=>setCourse(e.target.value)} /><br />
                <input type="text" placeholder="Enter your degree" onChange={(e)=>setDegree(e.target.value)} /><br />
                <button>Press</button>
            </form> */}
            <button onClick={myData}>Click</button>
        </div>
    )
}
export default MyApiEg3;
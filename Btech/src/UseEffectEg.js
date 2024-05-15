import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function UseEffectEg()
{
    const [count,setCount]=useState(0);
    const [data,setData]=useState(100);
    useEffect(()=>{
        console.log("useEffect called for general purpose.");
    })
    useEffect(()=>{
        if(data==110)
        {
            alert("Data reached its maximum value");
            setData(100);
        }
        console.log("UseEffect is called for data.");
    },[data])
    useEffect(()=>{
        console.log("useEffect called for count.");
    },[count])
    return(
        <div>
            <h1>Count is {count}</h1>
            <h1>Data is {data}</h1>
            <Button variant="warning" onClick={()=>setCount(count+1)}>Increment Count</Button>
            <Button variant="primary" onClick={()=>setData(data+1)}>Increment Data</Button>
        </div>
    )
}

export default UseEffectEg;
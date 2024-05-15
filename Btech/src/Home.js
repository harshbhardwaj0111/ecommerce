import { useState } from "react";
import User from "./User";
function Home()
{
    const [name,setName]=useState("");
    const [password,setP]=useState("");
    const [permission,setPer]=useState(false);
    function handleForm(e)
    {
        e.preventDefault();
        if(name=='Harsh' && password=='Softech')
        {
            setPer(true)
        }
        else
        {
            alert("not ok");
            setPer(false)
        }
    }
    return(
        <div>
            {permission?<User name="Harsh" age="21" address="Ellenabad" />:
            <form onSubmit={handleForm}>
                <input type="text" onChange={(e)=>setName(e.target.value)} /><br/>
                <input type="password" onChange={(e)=>setP(e.target.value)} />
                <button>Submit</button>
            </form>}
        </div>
    )
}
export default Home;
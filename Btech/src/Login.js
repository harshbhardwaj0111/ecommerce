function Login()
{
    return(
        <h1>Login component</h1>
    )
}

export default Login;
// import { useState } from "react";

// function Home()
// {
//     const [name,setName]=useState("")
//     const [car,setCar]=useState("")
//     function getName(e)
//     {
//         console.log(e.target.value)
//         setName(e.target.value)
//     }
//     function handleForm(e)
//     {
//         e.preventDefault();
//         console.log("form submit"+name.length)
//     if(name=="manan") 
//     {
//         alert("ok")
//     }
//     else
//     {
//         alert("not ok")
//     }
//     }
//     return(
//        <div>
//         <h3>Name is {name}</h3>
//         <form onSubmit={handleForm}>
//         <input type="text" onChange={(e)=>setName(e.target.value)} />
//         <select  onChange={(e)=>setCar(e.target.value)}>
//              <option value="volvo">Volvo</option>
//              <option value="saab">Saab</option>
//              <option value="mercedes">Mercedes</option>
//              <option value="audi">Audi</option>
//         </select>
//         <button>Submit</button>
//         </form>
//        </div>
//     )
// }

// export default Home;
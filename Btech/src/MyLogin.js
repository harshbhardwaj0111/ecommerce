import { useState } from "react";
import StudentList from './StudentList';
import React from 'react';
import Login from '@react-login-page/page10';
import LoginImg from '@react-login-page/page10/bg.png';
function MyLogin()
{
    const[email,setEmail]=useState();
    const[password,setP]=useState();
    const[permission,setPer]=useState(false);
    function check(e)
    {
        e.preventDefault();
        if(email=="harsh123@gmail.com" && password=="Softech")
        {
            setPer(true);
        }
        else
        {
            alert("Please enter correct email or password.");
            setPer(false);
        }
    }
    return(
        <div>
            { permission?<StudentList />:
                <form onSubmit={check} align="center">
                    Email : <input type="text" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} /><br />
                    Password : <input type="password" placeholder="Enter your Password" onChange={(e)=>setP(e.target.value)} /><br />
                    <button>Submit</button>
                </form>
            }
        </div>
    )
}
export default MyLogin;
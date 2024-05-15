import React from 'react';
import Login from '@react-login-page/page10';
import LoginImg from '@react-login-page/page10/bg.png';
import LoginInnerBgImg from '@react-login-page/page10/inner-bg.jpg';

function Login2()
{
    return(   
    <div>
    <Login style={{ height: 690, backgroundImage: `url(${LoginImg})` }}>
        <Login.InnerBox style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
        <Login.InnerBox panel="signup" style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
    </Login>
    </div>
    )
}

export default Login2;
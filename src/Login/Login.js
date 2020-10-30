import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from '../firebase/firebase'

function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signin =(e)=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }
    const register=(e)=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login_image" alt="login"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
               <h5>E-mail</h5> 
               <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Enter your email" />
               <h5>Password</h5>  
               <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Enter your password" />
               <button className="login_signinbtn" type="submit" onClick={signin}>Sign In</button>
             </form>
             <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
             <button className="login_registerbtn" onClick={register}>Create your Amazon account</button>
             </div>
        </div>
    )
}

export default Login

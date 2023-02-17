import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
  
    const token = sessionStorage.getItem("token");
    console.log(token);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target)
        actions.login(email, password)
    }
    useEffect(() => {
        if (store.token) navigate("/profile")
    })
  
    return (
      <div className="loginCont">
        <form className="loginForm">
            <div className="loginFormContent">
                <h1>Login</h1>
                <div className="input-field">
                    <input className="myInput" type={"text"} placeholder={'Email'} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="input-field">
                    <input className="myInput" type={'password'} placeholder={'Password'} value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <a href="#" className="link">Forgot Your Password?</a>
                <br/>
                <Link className="link" to="/">
                    <span>Continue without Loging in</span>
                </Link>
            </div>
            <div className="loginFormAction">
                <Link to="/register">
                    <button className="formBtn regBtn">Register</button>
                </Link>
                <button className="formBtn" onClick={(e) => handleClick(e)}>Sign in</button>
            </div>
        </form>
      </div>
    );
}

export default Login
import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const token = sessionStorage.getItem("token");
    console.log(token);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target)
        actions.createUser(name, email, password)
    }
  
    return (
      <div className="loginCont">
        <form className="loginForm">
            <div className="loginFormContent">
                <h1>Login</h1>
                <div className="input-field">
                    <input className="myInput" type={"text"} placeholder={'Name'} value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="input-field">
                    <input className="myInput" type={"text"} placeholder={'Email'} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="input-field">
                    <input className="myInput" type={'password'} placeholder={'Password'} value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <Link className="link" to="/login">
                    <span>Go Back</span>
                </Link>
                <br/>
                <Link className="link" to="/">
                    <span>Continue without Loging in</span>
                </Link>
            </div>
            <div className="loginFormAction">                
                <button className="formBtn regBtn" onClick={(e) => handleClick(e)}>Register</button>
            </div>
        </form>
      </div>
    );
}

export default Register
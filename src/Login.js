import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link to="/">
            <img  className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sing-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="Password"/>
                    <button className="login__sing">Sing In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className="login__crateacc">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

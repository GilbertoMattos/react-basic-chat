import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router-dom";

import { Button } from '../../components/atomic/Button'
import { Input } from '../../components/atomic/Input'

import style from './index.module.scss'

const Login = ({ handleLogin }) => {

    const textEmail = useRef(null);
    const [email, setEmail]= useState("");
    let history = useHistory();

    const handleFormLogin = (e) => {
        e.preventDefault();
        handleLogin(email);
        history.push('/chat');
    }

    useEffect(() => {
        textEmail.current.focus();
    }, []);

    return (
        <div className={`wrapper ${style.loginPage}`}>
            <h1>MiniChat</h1>

            <form onSubmit={handleFormLogin}>
                <div className='form-group'>
                    <label htmlFor='loginEmail'>Infome seu e-mail:</label>
                    <Input 
                        type='email' 
                        size='lg' 
                        id='loginEmail' 
                        ref={textEmail}
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <Button type='submit' size='lg'>Entrar</Button>
            </form>
        </div>
    );
};

export default Login;
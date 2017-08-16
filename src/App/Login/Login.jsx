import React from 'react';
import { Layout } from 'antd';
import style from './style.css';
import LoginForm from './LoginForm';

const LoginView = () => (

    <div className={style.login}>
        {/* TODO add logo */}

        <LoginForm/>
    </div>

)

export default LoginView;

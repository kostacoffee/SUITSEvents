import React from 'react';
import { Layout } from 'antd';
import style from './style.css';
import LoginForm from './components/LoginForm';

const LoginView = () => {
    return (
        <Layout.Content>

            <div className={style.login}>
                {/* TODO add logo */}

                <LoginForm/>
            </div>

        </Layout.Content>
    )
}

export default LoginView;

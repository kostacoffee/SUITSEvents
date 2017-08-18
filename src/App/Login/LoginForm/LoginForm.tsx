import React from 'react';
import { Form, Icon, Button, Input } from 'antd';
import { LocalForm, Control } from 'react-redux-form';
import style from './style.css';

const LoginForm = ({doLogin, hasLoginFailed, errorMsg, isLoading}) => (

        <LocalForm component={Form} onSubmit={(vals) => doLogin(vals)}>

            <Form.Item>
                <Control.text component={Input} model='.username' placeholder="Username" required={true} prefix={<Icon type="user" />} />
            </Form.Item>

            <Form.Item validateStatus={hasLoginFailed ? 'error' : ''} help={errorMsg} >
                <Control.text component={Input} model='.password' type='password' placeholder="Password" required={true} prefix={<Icon type="lock" />} />
            </Form.Item>

            <Button type='primary' htmlType='submit' className={style.loginButton} loading={isLoading}>Submit</Button>
        </LocalForm>

)

export default LoginForm;

import React from 'react';
import { Form, Icon, Button, Input } from 'antd';
import { reduxForm, Field, FormProps } from 'redux-form';
import style from './style.css';

interface LoginProps extends FormProps<FormData, {}, {}> {
    doLogin: (loginDetails: object) => void,
    hasLoginFailed: boolean,
    errorMsg: string,
    isLoading: boolean
}

const LoginForm: React.SFC<LoginProps> = ({handleSubmit, hasLoginFailed, errorMsg, isLoading}) => (

        <Form onSubmit={handleSubmit}>

            <Form.Item required={true}>
                <Field name='username' component={ ({input, meta, ...rest} : {input: any, meta: any}) =>
                    <Input placeholder="Username" prefix={<Icon type="user" />} {...rest} {...input} />
                }/>
            </Form.Item>

            <Form.Item validateStatus={hasLoginFailed ? 'error' : 'success'} help={errorMsg} required={true}>
                <Field name='password' component={ ({input, meta, ...rest}: {input : any, meta: any}) =>
                    <Input placeholder="Password" prefix={<Icon type="lock" />} type="password" {...rest} {...input} />
                }/>
            </Form.Item>

            <Button type='primary' htmlType='submit' className={style.loginButton} loading={isLoading}>Submit</Button>
        </Form>

)

export default reduxForm({
    form: 'login',
})(LoginForm);

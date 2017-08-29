import React from 'react';
import { Form, Icon, Button, Input } from 'antd';
import style from './style.css';
import { StateProps, DispatchProps, ComponentState } from './props';

export default class View extends React.Component<StateProps & DispatchProps, ComponentState> {
    constructor(props: StateProps & DispatchProps) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange(e: React.SyntheticEvent<any>) {
        var change: any = {}
        change[e.currentTarget.name] = e.currentTarget.value
        this.setState(change)
    }

    handleSubmit(event: React.FormEvent<any>) {
        event.preventDefault();
        this.props.doLogin(this.state.username, this.state.password);
    }
    
    render() {
        const handleSubmit = this.handleSubmit;
        const { hasLoginFailed, errorMsg, isLoading } = this.props;
        return (
            <Form onSubmit={handleSubmit.bind(this)}>

                <Form.Item required={true}>
                    <Input placeholder="Username" name="username" prefix={<Icon type="user" />} onChange={this.handleChange.bind(this)}/>
                </Form.Item>

                <Form.Item validateStatus={hasLoginFailed ? 'error' : 'success'} help={errorMsg} required={true}>
                    <Input placeholder="Password" name="password" prefix={<Icon type="lock" />} type="password" onChange={this.handleChange.bind(this)}/>
                </Form.Item>

                <Button type='primary' htmlType='submit' className={style.loginButton} loading={isLoading}>Submit</Button>
            </Form>
        )
    }
}
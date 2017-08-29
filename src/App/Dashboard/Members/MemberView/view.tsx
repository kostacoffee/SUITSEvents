import React from 'react';
import { StateProps, ComponentState, DispatchProps } from './props';
import style from './style.css'
import { Form, Input, Radio, InputNumber, Checkbox, Button } from 'antd'
import FormComponent from 'App/components/Form'

export default class View extends FormComponent<StateProps, ComponentState> {

    constructor(props: StateProps) {
        super(props);
        this.state = { ...props.member };
    }


    componentWillReceiveProps(newProps: StateProps) {
        this.setState({...newProps.member});
    }
    
    handleSubmit(e: React.SyntheticEvent<any>) {
        e.preventDefault();
        // dispatch some action;
    }

    render() {
        const state = this.state;
        const handleChange = this.handleChange;
        const handleSubmit = this.handleSubmit
        return (
        <Form className={style.memberView} onSubmit={handleSubmit}>

            <Form.Item label="First Name">
                <Input name="firstName" value={state.firstName} onChange={handleChange.bind(this)}/>
            </Form.Item>

            <Form.Item label="Last Name">
                <Input name="lastName" value={state.lastName} onChange={handleChange.bind(this)} />
            </Form.Item>
             
            <Form.Item label="Gender">
                <Radio.Group value={state.gender} onChange={handleChange.bind(this)}>
                    <Radio name="gender" value="male">Male</Radio>
                    <Radio name="gender" value="female">Female</Radio>
                    <Radio name="gender" value="other">Other</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item label="Email">
                <Input name="email" value={state.email} onChange={handleChange.bind(this)}/>
            </Form.Item>

            <Form.Item label="Access Number">
                <InputNumber name="access" value={state.access} onChange={handleChange.bind(this)}/>
            </Form.Item>
            
            <Form.Item label="Student ID">
                <InputNumber name="sid" value={state.sid} onChange={handleChange.bind(this)}/>
            </Form.Item>

            <Form.Item>
                <Checkbox name="newsletter" checked={state.newsletter} onChange={handleChange.bind(this)}> Newsletter </Checkbox>
            </Form.Item>

            <Form.Item>
                <Checkbox name="doingIT" checked={state.doingIT} onChange={handleChange.bind(this)}> Doing IT </Checkbox>
            </Form.Item>

            <Form.Item>
                <Checkbox name="registered" checked={state.registered} onChange={handleChange.bind(this)}> Registered </Checkbox>
            </Form.Item>

            <Button htmlType="submit" type="primary">Submit</Button>
            
        </Form>
        )
    }
}
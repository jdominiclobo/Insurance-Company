import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd'

function Register() {
    return(
        <div className="container">
            <div className="col-md-6">
                <h1 style={{colour:'white'}} > Register with us</h1>
                    
                <Form
                name="basic"
                initialValues={{ remember: true }}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Register
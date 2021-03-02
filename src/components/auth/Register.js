import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd'

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // const handleChange = (e) => {
    //     setState({
    //         [e.target.name] : e.target.value
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(confirmPassword !== password) {
            alert("Passwords do not match")
        } else {
            const formData = {
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }
            console.log("form", formData)
        }
    }

    return(
        <div className="container">
            <div className="justify-content-md-center" className="form-inputs">
                <h1 style={{color:'white'}} align="center" > Register with us</h1>
                    
                <Form
                    size="large"
                    name="basic"
                    initialValues={{ remember: true }}
                    align="center"
                >
                     <Input 
                        style={{ width: "30%" }} 
                        type="text" name="username" 
                        placeholder='Username' 
                        value={username} 
                        onChange={(e) => setUsername(e.targetvalue)} 
                    />
                     <br/><br/>
                    <Input 
                        style={{ width: "30%" }} 
                        type="email" name="email" 
                        placeholder='Email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <br/><br/>
                    <Input 
                        style={{ width: "30%" }} 
                        type="password" 
                        name="password" 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <br/><br/>
                    <Input 
                        style={{ width: "30%" }} 
                        type="password" 
                        name="confirmPassword" 
                        placeholder='Confirm Password' 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                    <br/><br/>
                    <Button
                        shape="round"
                        type="primary"
                        style={{ width: "10%" }}
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>
                </Form>

            </div>
        </div>
    )
}
export default Register
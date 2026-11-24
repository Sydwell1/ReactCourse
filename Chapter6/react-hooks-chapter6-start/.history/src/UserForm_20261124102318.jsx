import React from 'react';
import { useState } from 'react';
import {Form, Button} from 'react-bootstrap'
function UserForm() {
    const [email, setEmail] = useState("")
 const [password, setPassword] = useState("") 
 return (
 <div>
 <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
    <Form.Group controlId="formBasicEmail">

 <Form.Control type="email" placeholder="Enter email"
    onChange={event => setEmail(event.target.value)}/>
    <Form.Text className="text-muted">
        We'll never share your email with anyone else.
    </Form.Text>
 </Form.Group>


    <Form.Text className="text-muted">
        We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Label
        
    >Password</Form.Label>
        <Form.Control onChange={event => setPassword(event.target.value)} type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>


    <Button variant="primary" type="submit">
    Submit
    </Button>
 </Form>
 Email entered: {email}
 <br />
 Password entered: {password} 
 
 </div>
 );
}

export default UserForm;

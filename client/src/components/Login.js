import React, { useRef } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import {v4 as uuidV4} from 'uuid';

const Login = ({onIdSubmit}) => {
    const idRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    const createNewId = () => {
        onIdSubmit(uuidV4());
    }
    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh'}}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type="text" required ref={idRef}></Form.Control>
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button variant="secondary" onClick={createNewId}>Create a new Id</Button>
            </Form>
        </Container>
        )

}

export default Login;
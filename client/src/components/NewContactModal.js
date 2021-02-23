import React, { useRef } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';

const NewContactModal = ({closeModal}) => {
    const idRef = useRef();
    const nameRef = useRef();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        closeModal();
    }


    return (
        <>
            <Modal.Header closeButton >Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control ref={idRef} type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text"></Form.Control>
                    </Form.Group>
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>

        </>
    );
}

export default NewContactModal;

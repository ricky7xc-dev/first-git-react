import React, { Fragment, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';

import Axios from "axios";

class ContactPage extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) =>{

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const full_name = target.full_name;
        const email = target.email;
        const message = target.message;

        this.setState({
            [full_name]: value,
            [email]: value,
            [message]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true,
        });
    }

    doSubmit = (e) => {
        Axios.post("http://localhost:5000/api/insert", 
        {
        full_name: this.state.full_name, 
        email: this.state.email,
        message: this.state.message
        }).then(() =>{
            alert("berhasil menambah data");
        });
    }
    render(){
    return(
        <div>
            <Hero title={this.props.title} />

            <Content>
                <Form 
                onSubmit={this.handleSubmit}
                >
                    <Form.Group>
                        <Form.Label htmlFor="full_name">Full Name</Form.Label>
                        <Form.Control 
                        id="full_name" 
                        name="name" 
                        type="text" 
                        value={this.state.full_name}
                        onChange={this.handleChange} 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        onChange={this.handleChange} 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control 
                        id="message" 
                        name="message" 
                        as="textarea"
                        rows="3" 
                        value={this.state.message}
                        onChange={this.handleChange} 
                        />
                    </Form.Group>

                    <Button 
                    className="d-inline-block" 
                    variant="primary"
                    type="submit"
                    disabled={this.state.disabled}
                    >
                        Send
                    </Button>

                </Form>
            </Content>
        </div>
    );
}
}

export default ContactPage;
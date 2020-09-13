import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import {FormErrors} from '../Components/Errors'; 
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            name: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            nameValid: false,
            formValid: false,
            formErrors: { email: '', name: '', password: '' }
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props; 
            let name = this.state.name;
            let password = this.state.password;
            let email = this.state.email;
        
       
        const request = axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: 'https://localhost:44344/api/Account/Register',
            params: {
                email,
                password,
                name
            }
        })
        .then((response) => response.data)
        .catch((error) => error);

    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidatorsErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidatorsErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'name':
                nameValid = value.length >= 4;
                fieldValidatorsErrors.name = nameValid ? '' : 'is too short';
                break;
            case 'password':
                passwordValid = value.length >= 4;
                fieldValidatorsErrors.password = passwordValid ? '' : 'is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidatorsErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.nameValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <Container className="mt-3">
                <div class="bg-secondary m-1 p-1 text-white"><h4>Регистрация</h4></div>
                <FormErrors formErrors={this.state.formErrors} />
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className={this.errorClass(this.state.formErrors.name)} onChange={this.handleUserInput}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" placeholder="Enter your Name..." />
                    </Form.Group>
                    <Form.Group className={this.errorClass(this.state.formErrors.email)} onChange={this.handleUserInput}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" placeholder="Enter email..." />
                    </Form.Group>
                    <Form.Group className={this.errorClass(this.state.formErrors.password)} onChange={this.handleUserInput}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" placeholder="Enter password..." />
                    </Form.Group>
                    <Button type="submit" variant="btn btn-secondary" disabled={!this.state.formValid}>Sign in</Button>
                    {console.log(this.state.formValid)}
                    <a href='javascript:history.go(-1)' className="btn btn-secondary" style={{ margin: "8px" }}>Назад</a>
                </Form>
            </Container>
        );
    }
} 
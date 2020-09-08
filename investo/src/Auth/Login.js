import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { FormErrors } from '../Components/Errors';
import 'font-awesome/css/font-awesome.min.css';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            formErrors: { email: '', password: '' }
        }

        this.onSubmit = this.onSubmit.bind(this);
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
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidatorsErrors.email = emailValid ? '' : 'is invalid';
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
            passwordValid: passwordValid
        }, this.valideForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <Container className="mt-3" style={{ width: "600px" }}>
                <div class="bg-secondary m-1 p-1 text-white"><h4>Вход</h4></div>
                <FormErrors formErrors={this.state.formErrors} />
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className={this.errorClass(this.state.formErrors.email)} onChange={this.handleUserInput}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" placeholder="Enter email..." />
                    </Form.Group>
                    <Form.Group className={this.errorClass(this.state.formErrors.password)} onChange={this.handleUserInput}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" placeholder="Enter password..." />
                    </Form.Group>
                    <Button variant="btn btn-secondary" type="submit" disabled={!this.state.formValid}>Log In</Button>
                </Form>
            </Container>
        );
    }
} 
import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FormErrors } from '../Errors/InputUserErrors';
import { Alert } from 'reactstrap';

export default class Contacts extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitButtonSend = this.onSubmitButtonSend.bind(this);

        this.state = {
            email: '',
            name: '',
            message: '',
            emailValid: false,
            nameValid: false,
            formErrors: { email: '', name: '' },
            isSubmit: false,
            visible : true
        }
    }

    onSubmitButtonSend(e) {
        e.preventDefault();

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

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidatorsErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'name':
                nameValid = value.length >= 4;
                fieldValidatorsErrors.name = nameValid ? '' : 'is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidatorsErrors,
            emailValid: emailValid,
            nameValid: nameValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.nameValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    toggle(){
        this.setState({visible : !this.state.visible});
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ isSubmit: true });

    }
    render() {
        return (
            <>
                { this.state.isSubmit ? 
                <Container>
                    <Alert variant="success" className="mt-2" isOpen={this.state.visible} toggle={this.toggle.bind(this)}>Thank you for your question!!</Alert>
                </Container> : null}
                <Container style={{ backgroundColor: "#c0c0c1", height: "60vh" }}>
                    <Container style={{ width: "600px" }}>
                        <h1 className="text-center mt-3">Обратная связь</h1>
                        <div class="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group className={this.errorClass(this.state.formErrors.email)} controlId="formBasicEmail" onChange={this.handleUserInput}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" onChange={this.handleUserInput} className={this.errorClass(this.state.formErrors.name)}>
                                <Form.Label>Имя</Form.Label>
                                <Form.Control name="name" className={this.errorClass(this.state.formErrors.name)} as="textarea" rows="1" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" onChange={this.handleUserInput}>
                                <Form.Label>Вопрос</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Текст сообщения..." />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={!this.state.formValid}>Отправить</Button>
                        </Form>
                    </Container>
                </Container>
            </>
        );
    }
}

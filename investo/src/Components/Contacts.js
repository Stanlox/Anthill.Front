import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Contacts extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);


        this.state = {
            email: '',
            name: '',
            message: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <Container style={{backgroundColor:"#c0c0c1", height:"50vh"}}>
                <Container style={{ width: "600px"}}>
                    <h1 className="text-center mt-3">Обратная связь</h1>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail" onChange={this.onChangeEmail}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" onChange={this.onChangeName}>
                            <Form.Label>Имя</Form.Label>
                            <Form.Control as="textarea" rows="1" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" onChange={this.onChangeMessage}>
                            <Form.Label>Вопрос</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Текст сообщения..." />
                        </Form.Group>
                        <Button variant="primary" type="submit">Отправить</Button>
                    </Form>
                </Container>
            </Container>
        );
    }
}

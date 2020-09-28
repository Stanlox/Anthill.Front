import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

export class Update extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeShortDescription = this.onChangeShortDescription.bind(this);
        this.onChangeLongDescription = this.onChangeLongDescription.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateCancel = this.onUpdateCancel.bind(this);

        this.state = {
            name: "",
            shortDescription: "",
            longDescription: "",
            isCompleted: true,
            endDate: new Date().toLocaleString(),
            id: 0,
            category: "",
            categoryId: 0
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get("https://localhost:44344/api/Admin/EditProject/" + id).then(product => {
            const response = product.data;
            this.setState({
                id: response.id,
                name: response.name,
                shortDescription: response.shortDescription,
                longDescription: response.longDescription,
                isCompleted: response.isCompleted,
                endDate: response.endDate,
                category: response.category,
                categoryId: response.categoryId
            })
        })
    }

    onUpdateCancel() {
        const { history } = this.props;
        history.push('/projects');
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeEndDate(e) {
        this.setState({
            endDate: e.target.value
        })
    }

    onChangeShortDescription(e) {
        this.setState({
            shortDescription: e.target.value
        })
    }

    onChangeLongDescription(e) {
        this.setState({
            longDescription: e.target.value
        })
    }

    onChangeCompleted(e) {
        this.setState({
            isCompleted: e.target.checked
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("submit");
        const { history } = this.props;

        let project = {
            id: this.state.id,
            name: this.state.name,
            shortDescription: this.state.price,
            longDescription: this.state.isAvailable,
            isCompleted: this.state.isCompleted,
            endDate: this.state.endDate,
            category: this.state.category,
            categoryId: this.state.categoryId
        }

        axios.put("https://localhost:44383/api/Admin/SaveEditProject/" + project).then(result => {
            history.push('/projects');
        })
    }


    render() {
        return (
            <Container className="mt-3">
                <h3 style={{textAlign: "center"}}>Редактирование {this.state.name}</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Имя:  </Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Краткое описание: </Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.shortDescription}
                            onChange={this.onChangeShortDescription}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Полное описание: </Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.longDescription}
                            onChange={this.onChangeLongDescription}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Дата завершения:</Form.Label>
                        <Form.Control
                            type="date"
                            min="2018-01-01"
                            value={this.state.endDate}
                            onChange={this.endDate}
                        />
                    </Form.Group>
                    <Form.Check>
                        <Form.Check.Label></Form.Check.Label>
                        <Form.Check.Input
                            checked={this.state.isCompleted}
                            onClick={this.onChangeCompleted}
                        />
                    </Form.Check>
                    <Form.Group>
                        <Button onClick={this.onUpdateCancel} variant="light">Назад</Button>{' '}
                        <Button type="submit" variant="success">Сохранить</Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

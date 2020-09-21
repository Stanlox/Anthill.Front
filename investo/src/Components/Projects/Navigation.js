import React, { Component } from 'react';
import { Col, Row, ListGroup, Card } from 'react-bootstrap';
import axios from 'axios';


export default class Navigation extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects: [],
            loading: true
        }
    }

    componentDidMount() {
        const url = `https://localhost:44344/api/Search/Search/`;
        axios.get(url).then(result => {
            const response = result.data;
            this.setState({ projects: response, loading: false });
        })
    }

    render() {
        return (
            <Col md="3">
                <h5 className="text-center mt-5">Категории</h5>
                <Card bg="dark">
                    <ListGroup variant="flush">
                        <ListGroup.Item action href="design" variant="secondary">Дизайн</ListGroup.Item>
                        <ListGroup.Item action href="business" variant="secondary">Музыка</ListGroup.Item>
                        <ListGroup.Item action href="initiatives" variant="secondary">Бизнес</ListGroup.Item>
                        <ListGroup.Item action href="music" variant="secondary">Инициативы</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card bg="dark" className="mt-3">
                    <ListGroup variant="flush">
                        <ListGroup.Item action href="design" variant="secondary">Завершающиеся</ListGroup.Item>
                        <ListGroup.Item action href="business" variant="secondary">Новые</ListGroup.Item>
                        <ListGroup.Item action href="initiatives" variant="secondary">Завершённые</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        );
    }
}
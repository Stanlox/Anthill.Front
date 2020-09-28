import React, { Component } from 'react';
import { Col, Row, ListGroup, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects: [],
            loading: true
        }
    }

   
    render() {
        return (
            <Col md="3">
                <h5 className="text-center mt-5">Категории</h5>
                <Card bg="dark">
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="secondary">
                            <Link to='/design' style={{ color: "black",  textDecoration: 'none' }}>Дизайн</Link>
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <Link to='/business' style={{ color: "black", textDecoration: 'none' }}>Бизнес</Link>
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <Link to='/music' style={{ color: "black",  textDecoration: 'none' }}>Музыка</Link>
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <Link to='/initiatives' style={{ color: "black", textDecoration: 'none' }}>Инициативы</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card bg="dark" className="mt-3">
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="secondary">
                            <Link to='/completed' style={{ color: "black", textDecoration: 'none' }}>Завершённые</Link>
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <Link to='/new' style={{ color: "black", textDecoration: 'none' }}>Новые</Link>
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                            <Link to='/ending' style={{ color: "black", textDecoration: 'none' }}>Завершающиеся</Link>
                        </ListGroup.Item>                        
                    </ListGroup>
                </Card>
            </Col>
        );
    }
}
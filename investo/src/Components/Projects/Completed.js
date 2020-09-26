import React, { Component } from 'react'
import { Media, Container, Col, Row, Button } from 'react-bootstrap';
import Navigation from './Navigation';
import axios from 'axios';

export default class Completed extends Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this);
        this.state = {
            projects: [],
            loading: true
        }
    }



    componentDidMount() {
        axios.get("https://localhost:44344/api/Search/Completed").then(result => {
            const response = result.data;
            this.setState({ projects: response, loading: false });
        })
    }

    render() {
        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                this.renderAllCompletedProjects(this.state.projects)
            );

        return (
            <div>
                {content}
            </div>
        );
    }

    getDate(date) {
        var options = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        }

        var date = new Date(date);
        return date.toLocaleString('ru', options);
    }

    renderAllCompletedProjects(projects) {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        {
                            projects.map(project =>
                                <Media className="m-5">
                                    <img src={require(`../../img/Projects/${project.id}.jpg`)}
                                        className="mr-3"
                                        height={200}
                                        width={300}
                                    />
                                    <Media.Body>
                                        <h3>Завершён:</h3><h3>{this.getDate(project.endDate)}</h3>
                                        <h5>{project.name}</h5>
                                        <p>{project.shortDescription}</p>
                                        <Button variant="danger" disabled="disabled" className="mb-1">Подробнее</Button>
                                    </Media.Body>
                                </Media>
                            )
                        }
                    </Col>
                    <Navigation />
                </Row>
            </Container>
        );
    }
}
import React, { Component } from 'react';
import { Media, Container, Col, Row, Button } from 'react-bootstrap';
import Navigation from './Navigation';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Initiatives extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            loading: true
        }
    }

    componentDidMount() {
        const category = "Инициативы";
        axios.get(`https://localhost:44383/api/Search/Category?nameCategory=${category}`).then(result => {
            const response = result.data;
            this.setState({ projects: response, loading: false });
            console.log(this.state.projects);
        })
    }

    render() {
        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                this.renderAllInitiativesProjects(this.state.projects)
            );

        return (
            <div>
                {content}
            </div>
        );
    }

    renderAllInitiativesProjects(projects) {
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
                                        <h5>{project.name}</h5>
                                        <p>{project.shortDescription}</p>
                                        <Link to={{ pathname: "/show", state: project }}>
                                            <Button variant="outline-info" className="mb-1">Подробнее</Button>
                                        </Link>
                                        <Link to={{ pathname: "/favourites", state: project }}>
                                            <Button variant="outline-info" className="mb-1">В избранное</Button>
                                        </Link>
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
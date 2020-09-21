import React, { Component } from 'react';
import { Media, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Navigation from './Navigation';

export default class All extends Component {
    constructor(props) {
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
        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                this.renderAllProjects(this.state.projects)
            );

        return (
            <div>
                {content}
            </div>
        );
    }

    renderAllProjects(projects) {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        {

                            projects.map(project =>
                                <Media className="m-5">
                                    <img src={`/src/img/Projects/${project.id}.jpg`}
                                        className="mr-3"
                                        height={200}
                                        width={300}
                                    />
                                    <Media.Body>
                                        <h5>{project.name}</h5>
                                        <p>{project.shortDescription}</p>
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
import React, { Component } from 'react';
import { Media, Container, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import Navigation from './Navigation';
import { Link } from "react-router-dom";

export default class All extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: props.location?.state ? props.location.state : [],
            loading: props.location?.state ? false : false
        }
    }

    componentDidMount() {

        if (this.props.location?.state) return;
        axios.get("https://localhost:44383/api/Search/Projects/").then(result => {
            const response = result.data;
            this.setState({ projects: response, loading: false });
        })
    }

    render() {
        let title;
        if (this.props.location?.state) {
            title = "Возможно вы искали";
        }
        else {
            title = "Все проекты";
        }
        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                this.renderAllProjects(this.state.projects)
            );

        return (
            <div>
                <h2 align="center" className="mt-3">{title}</h2>
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
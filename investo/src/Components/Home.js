import React, { Component } from 'react';
import _Carousel from './Carousel';
import { CardDeck, Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import {Link} from "react-router-dom";
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { projects: props.location?.state ? props.location.state : [] };
        this.EndingProjects = this.EndingProjects.bind(this);

    }

    componentDidMount() {
        this.EndingProjects();
    }

    onProjectDescription(project) {
        const { history } = this.props;
        history.push('/show/' + project);

    }

    EndingProjects() {
        axios.get("https://localhost:44344/api/Search/Terminating").then(
            result => {
                const responce = result.data;
                this.setState({ projects: responce });
            }
        )
    }

    renderProjects(projects) {
        return (
            <div className="container">
                <h2 className="text-center mt-4">Завершающиеся</h2>

                <CardDeck>
                    {
                        projects.map(project =>
                            <Card border="secondary">
                                <Card.Img variant="top"
                                    src={require(`../img/Projects/${project.id}.jpg`)}
                                    width="40px"
                                    height="200px"
                                />
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>
                                        {project.shortDescription}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={{ pathname: "/show", state : project}}>
                                        <Button variant="primary" className="mb-1">Подробнее</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        )
                    }
                </CardDeck>
            </div>
        );
    }

    render() {
        return (
            <>
                <_Carousel />
                {this.renderProjects(this.state.projects)}
            </>
        );
    }
}
import React, { Component } from 'react';
import _Carousel from './Carousel';
import { CardDeck, Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { projects: props.location?.state ? props.location.state : [] };
    }

    componentDidMount() {
        if (this.props.location?.state) return;
        this.EndingProjects();
    }

    componentDidUpdate(props) {
        if (props.location.state !== this.props.location.state) {
            if (this.props.location.state) this.setState({ products: this.props.location.state })
            else this.EndingProjects();
        }
    }

    EndingProjects() {
        const url = `https://localhost:44344/api/Search/EndingProjects/`;
        axios.get(url).then(result => {
            const responce = result.data;
            this.setState({ projects: responce });
        })
    }

    renderProjects(projects) {
        return (
            <div className="container">
                <h2 className="text-center mt-4">Завершающиеся</h2>
                { console.log(projects)}
                {

                    projects.map(project =>
                        <CardDeck className="m-4">
                            <Card>
                                <Card.Img variant="top"
                                    src={`/src/img/Projects/${project.id}.jpg`}
                                />
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>
                                        {project.shortDescription}
                                    </Card.Text>
                                    <Button variant="primary">Подробнее</Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    )
                }
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
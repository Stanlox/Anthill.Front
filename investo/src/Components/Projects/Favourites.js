import React, { Component } from 'react'
import { Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class Favourites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: props.location?.state ? props.location.state : []
        }
    }

    render() {
        let arrayOfProjects = this.state.projects;
        console.log(this.state.projects);
        let kek = Object.keys(arrayOfProjects).map((key) => [Number(key), arrayOfProjects[key]]);
        let content = this.state.projects.length == 0 ? (
            <h2 style={{textAlign: "center"}} className="mt-5">В избранном нечего нет</h2>
        ) : (
            this.renderFavouritesProjects(kek)
            );
        return (
            <div>
                {content}
            </div>
        );
    }

    renderFavouritesProjects(projects) {
        return (
            <Container>
                {
                    projects.map(project =>
                        <div className="alert alert-danger mt-3">
                            {project.name}
                            <Button variant="danger" style={{ position: "absolute", top: "0", right: "0" }}>
                                ❌
                            </Button>
                            <hr/>
                        </div>
                    )
                }
            </Container>
        );
    }
}
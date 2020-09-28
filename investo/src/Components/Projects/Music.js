import React, { Component } from 'react';
import { Media, Container, Col, Row, Button } from 'react-bootstrap';
import Navigation from './Navigation';
import axios from 'axios';
import { Link } from "react-router-dom";
import {connect} from'react-redux';
import {updateFavorite} from '../../Redux/actions/ProjectsActions';

class _Music extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            loading: true
        }
    }

    componentDidMount() {
        const category = "Музыка";
        axios.get(`https://localhost:44383/api/Search/Category?nameCategory=${category}`).then(result => {
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
                this.renderAllMusicProjects(this.state.projects)
            );

        return (
            <div>
                {content}
            </div>
        );
    }

    renderAllMusicProjects(projects) {
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
                                            <Button variant="outline-info" onClick= {() => this.props.setFavorite(project)} className="mb-1 ml-2">В избранное</Button>
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

export default connect(() => {}, (dispatch) => {
    return {
        setFavorite : (project) => dispatch(updateFavorite(project))
    }
})(_Music)
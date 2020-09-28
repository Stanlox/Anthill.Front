import React, { Component } from 'react'
import { Button, Container } from "react-bootstrap";
import {connect} from 'react-redux';
import {deleteFavorite} from '../../Redux/actions/ProjectsActions';

class _Favourites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: props.location?.state ? props.location.state : []
        }
    }

    render() {
        let content = this.props.favoritesProjects.length == 0 ? (
            <h2 style={{textAlign: "center"}} className="mt-5">В избранном нечего нет</h2>
        ) : (
            this.renderFavoritesProjects(this.props.favoritesProjects)
            );
        return (
            <div>
                {content}
            </div>
        );
    }

    renderFavoritesProjects(projects) {
        return (
            <Container>
                {
                    projects.map(project =>
                        <div className="alert alert-danger mt-3">
                            Название: {project.name}
                            <Button variant="danger" onClick = {() => this.props.deleteFavorite(project.id)} style={{ position: "absolute", top: "0", right: "0" }}>
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

export default connect((state) => {
    return {
        favoritesProjects : state.favorites.projects
    }
},  (dispatch) => {
    return{
        deleteFavorite : (id) => dispatch(deleteFavorite(id))
    }
})(_Favourites)
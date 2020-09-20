import axios from 'axios';
import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

export class AllProjects extends Component {
    constructor(props) {
        super(props);

        this.onProductUpdate = this.onProductUpdate.bind(this);
        this.onProductDelete = this.onProductDelete.bind(this);

        this.state = {
            projects: props.location?.state ? props.location.state : [],
            loading: false
        }
    }

    componentDidMount() {
        if (this.props.location?.state) return;
        this.ProjectData();
    }

    ProjectData(){
        const url = `https://localhost:44344/api/Search/Search/`;
        axios.get(url).then(result => {
            const response = result.data;
            this.setState({ projects: response, loading: false });
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.projects.data != this.props.projects.data) {
            this.setState({ projects: this.props.projects.data });
        }
    }

    onProductUpdate(id) {
        const { history } = this.props;
        history.push('/update/' + id);
    }

    onProductDelete(id) {
        const { history } = this.props;
        history.push('/delete/' + id);
    }


    renderAllProjects(projects) {
        return (
            <Table className="table table-bordered table-hover">
                {console.log("yes")}
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Имя</th>
                        <th>Категория</th>
                        <th>Дата завершения</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map(project =>
                            <tr key={project.id}>
                                <td>{project.id}</td>
                                <td>{project.name}</td>
                                <td>{project.category.categoryName}</td>
                                <td>{project.endDate}</td>
                                <td>
                                    <Form.Group>
                                        <Button onClick={() => this.onProductUpdate(project.id)} variant="success">
                                            Изменить
                                        </Button>
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group>
                                        <Button onClick={() => this.onProductDelete(project.id)} variant="danger">
                                            Удалить
                                        </Button>
                                    </Form.Group>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        );
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
}
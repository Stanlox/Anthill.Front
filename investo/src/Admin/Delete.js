import React, { Component } from 'react';
import axios from 'axios';
import { Table, Image,  Button, Container, Card, Nav } from 'react-bootstrap';

export class Delete extends Component {
    constructor(props) {
        super(props);

        this.onConfirmation = this.onConfirmation.bind(this);

        this.state = {
            name: "",
            shortDescription: "",
            isCompleted: true,
            endDate: new Date().toLocaleString()
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get("https://localhost:44344/api/Admin/EditProject/" + id).then(product => {
            const response = product.data;
            this.setState({
                name: response.name,
                shortDescription: response.shortDescription,
                isCompleted: response.isCompleted,
                endDate: response.endDate
            })
        })
    }


    onConfirmation(e) {
        const { id } = this.props.match.params;
        const { history } = this.props;

        axios.delete("https://localhost:44383/api/Admin/EditProject/" + id).then(result => {
            history.push('/projects');
        })
    }

    render() {
        const { id } = this.props.match.params;
        return (
            <Container style={{ marginTop: 10 }}>
                <h2 align="center">Подтвержения удаления товара</h2>
                <Card>
                    <Table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Название</th>
                                <th scope="col">Описание</th>
                                <th scope="col">Статус завершения</th>
                                <th scope="col">Дата завершения</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td>{this.state.name}</td>
                                <td>{this.state.shortDescription}</td>
                                <td>{this.state.isCompleted ? "Завершён" : "Не завершён"}</td>
                                <td>{this.state.endDate}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Image src={`/src/img/Projects/${id}.jpg`} width="600" height="300" />
                    <Nav.Link href='javascript:history.go(-1)' className="btn btn-secondary">Назад</Nav.Link>
                    <Button onClick={this.onConfirmation} variant="danger">Подтвердить</Button>
                </Card>
            </Container>
        )
    }
}
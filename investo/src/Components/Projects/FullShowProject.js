import React, { Component } from 'react';
import { Media, Container, Col, Row } from 'react-bootstrap';

export default class ShowFullProject extends Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this);
        this.state = {
            projects: props.location.state
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        console.log(this.state.projects);
    }
    getDate(date) {
        var options = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        }

        var date = new Date(date);
        return date.toLocaleString('ru', options);
    }

    render() {
        return (
            <Container>
                <div class="jumbotron mt-4">
                    <h1>{this.state.projects.name}</h1>
                    <p class="lead">{this.state.projects.shortDescription}</p>
                </div>
                <Container>
                    <Row>
                        <Col sm={9}>
                            <img src={require(`../../img/Projects/${this.state.projects.id}.jpg`)} width = {800}/>
                        </Col>
                        <Col sm={3} style= {{clear:"both"}}>
                            <div style={{ textAlign: "right" }}>
                                <div>
                                    <h3><b>Дата окончания: {this.getDate(this.state.projects.endDate)}</b></h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="mt-5">
                    <h5 style={{ textIndent: "20px" }}>
                        {this.state.projects.longDescription}
                    </h5>
                </div>
            </Container>
        );

    }
}
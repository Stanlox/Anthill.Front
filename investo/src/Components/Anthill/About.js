import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import RenderGoogleMap from './NavItem/YandexMap';
import Anthill from './NavItem/Anthill';
import Crowdfunding from './NavItem/Crowdfunding';
import Help from './NavItem/Help';


export default class About extends Component {
    constructor(props) {
        super(props);
        this.ChangeEventKey = this.ChangeEventKey.bind(this);
        this.state = { tab: props.location.state ? props.location.state : "first" };
    }

    ChangeEventKey(eventKey) {
        this.setState({ tab: eventKey });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.state !== prevProps.location.state) {
            this.setState({ tab: this.props.location.state });
            window.scrollTo(0, 0)
        }
    }

    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" activeKey={this.state.tab}>
                    <Row>
                        <Col sm={3}>
                            <Nav variant="light" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" onSelect={this.ChangeEventKey} className="text-dark"><h4><font size="4" face="Arial">Об муравейнике</font></h4></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" onSelect={this.ChangeEventKey} className="text-dark"><h4><font size="4" face="Arial">О краудфандинге</font></h4></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" onSelect={this.ChangeEventKey} className="text-dark"><h4><font size="4" face="Arial">Помощь</font></h4></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" onSelect={this.ChangeEventKey} className="text-dark"><h4><font size="4" face="Arial">Контакты</font></h4></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3" >
                                <Tab.Pane eventKey="first">
                                    <Anthill />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Crowdfunding />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className="ml-2">
                                    <Help />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <RenderGoogleMap />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container >
        );
    }
}
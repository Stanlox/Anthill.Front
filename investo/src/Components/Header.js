import React, { Component } from 'react';
import logo from '../img/logo.jpeg';
import { Navbar, Nav, FormControl, Container, Button, Form, NavbarBrand } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"><font size="4" face="Arial">Главная</font></Nav.Link>
                                <Nav.Link href="/about"><font size="4" face="Arial">Это муравейник</font></Nav.Link>
                                <Nav.Link href="/contacts"><font  size="4" face="Arial">Задать вопрос</font></Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl    
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2" 
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contacts' component={Contacts} />
                    </Switch>
                </Router>
            </>
        );
    }
}
import React, { Component } from 'react';
import logo from '../../img/logo.jpeg';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import About from '../Anthill/About';
import Contacts from '../Anthill/Contacts';
import Login from '../../Auth/Login';
import Register from '../../Auth/Register';
import { Find } from './Find';
import DropdownCategoryProject from './Dropdown';
import All from '../Projects/All';
import Business from '../Projects/Business';
import Design from '../Projects/Design';
import Music from '../Projects/Music';
import Initiatives from '../Projects/Initiatives';
import Completed from '../Projects/Completed';
import Ending from '../Projects/Ending';
import New from '../Projects/New';
import ShowFullProject from '../Projects/FullShowProject';
import '../../../node_modules/font-awesome/css/font-awesome.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Link to ="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Container>
                                    <DropdownCategoryProject />
                                    <Link style={{ textDecoration: 'none' }} to="/"><font size="4" face="Arial" className="text-muted">Главная</font></Link>
                                    <Link style={{ textDecoration: 'none' }} to="/about"><font size="4" face="Arial" className="text-muted ml-2">Это муравейник</font></Link>
                                    <Link style={{ textDecoration: 'none' }} to="/contacts"><font size="4" face="Arial" className="text-muted ml-2">Задать вопрос</font></Link>
                                </Container>
                            </Nav>
                            <img src="https://img.icons8.com/material/24/000000/star--v1.png" className="mr-2"/>
                            <Find />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                
                <Link to="/login">
                    <Form style={{ position: "absolute", top: "10px", right: "125px" }}>
                        <Button variant="btn btn-success" type="submit">Log in</Button>
                    </Form>
                </Link>
                <Link to="/register">
                    <Form style={{ position: "absolute", top: "10px", right: "40px" }}>
                        <Button variant="btn btn-success" type="submit">Sign in</Button>
                    </Form>
                </Link>
                <img src="https://img.icons8.com/metro/26/000000/forgot-password.png" style={{ position: "absolute", top: "10px", right: "10px" }} className="mt-1"/>
                <>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contacts' component={Contacts} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/all' component={All} />
                        <Route exact path='/business' component={Business} />
                        <Route exact path='/design' component={Design} />
                        <Route exact path='/music' component={Music} />
                        <Route exact path='/initiatives' component={Initiatives} />
                        <Route exact path='/completed' component={Completed}/>
                        <Route exact path='/ending' component={Ending}/>
                        <Route exact path='/new' component={New}/>
                        <Route exact path='/show' component={ShowFullProject}/>
                    </Switch>
                </>
            </>
        );
    }
}
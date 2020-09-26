import React, { Component } from "react";
import styled from 'styled-components';
import logo from '../../img/logo.jpeg';
import { Container, Row, Nav } from 'react-bootstrap';
import About from "../Anthill/About";
import { Link } from "react-router-dom";


export default class Footer extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <>
                <FooterContainer className="main-footer">
                    <div className="footer-middle">
                        <Container>
                            <Row>
                                <div className="col-md-3 col-sm-6">
                                    <h4>Об муравейнике</h4>
                                    <ul className="list-unstyled">
                                        <li><Link to={{ pathname: "/about", state :"first"}}>Об муравейнике</Link></li>
                                        <li><Link to={{ pathname: "/about", state :"first"}}>Команда</Link></li>
                                        <li><Link to={{ pathname: "/about", state: "fourth" }}>Контакты</Link></li>
                                        <li><Link to={{ pathname: "/contacts"}}>Задать вопрос</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <h4>Поддержка</h4>
                                    <ul className="list-unstyled">
                                        <li><Link to= {{ pathname: "/about", state: "second"}}>О краунфандинге</Link></li>
                                        <li><Link to= {{ pathname: "/about", state: "third" }}>Помощь</Link></li>
                                        <li><Link to="/all">Проекты</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <img
                                        src={logo}
                                        height="150"
                                        width="150"
                                        className="d-inline-block align-top"
                                        alt="Logo"
                                    />
                                </div>
                            </Row>
                            <div className="footer-bottom">
                                <p className="text-xs-center">
                                    &copy;{new Date().getFullYear()} Муравейник
                                </p>
                            </div>
                        </Container>
                    </div>
                </FooterContainer>


            </>
        );
    }
}


const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 4rem;
    color: var(--mainWhite);
    margin-top: 25%;
    }

.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

    ul li a {
        color: var(--mainGrey);
    }

    ul li a: hover{
        color: var(--mainLightGrey);
    }
`;
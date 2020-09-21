import React from "react";
import styled from 'styled-components';
import logo from '../../img/logo.jpeg';


function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Об муравейнике</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Об муравейнике</a></li>
                                <li><a href="/">Команда</a></li>
                                <li><a href="/">Контакты</a></li>
                                <li><a href="/">Задать вопрос</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Поддержка</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">О краунфандинге</a></li>
                                <li><a href="/">Правила Муравейника</a></li>
                                <li><a href="/">Помощь</a></li>
                                <li><a href="/">Проекты</a></li>
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
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Муравейник
                            </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

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
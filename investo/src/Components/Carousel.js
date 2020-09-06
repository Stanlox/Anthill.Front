import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../img/anthill1.jpg';
import CarouselImg2 from '../img/anthill2.jpg';
import CarouselImg3 from '../img/anthill3.jpg';
import CarouselImg4 from '../img/anthill4.jpg';
import { Container } from 'react-bootstrap';

export default class _Carousel extends Component {
    render() {
        return (
            <Carousel data-ride="carousel" data-interval="4000" pause="false">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImg2}
                    />
                    <Carousel.Caption>
                        <h1>Манифест anthill.by</h1>
                        <h4>Мы хотим быть успешными!</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImg3}
                    />
                    <Carousel.Caption style={{ textAlign: "left" }}>
                        <h1>The Belarus Book</h1>
                        <h4>Визуальный рассказ о современной Беларуси.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImg4}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
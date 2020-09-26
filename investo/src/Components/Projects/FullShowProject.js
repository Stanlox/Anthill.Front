import React, { Component } from 'react';
import { Media, Container, Col, Row } from 'react-bootstrap';
import Navigation from './Navigation';
import axios from 'axios';

export default class ShowFullProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: props.location.state
        };
    }


    render() {        
        return(
            <div>project</div>
        );
        
    }
}
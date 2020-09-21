import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export class Find extends Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.get("https://localhost:44344/api/Search/Search/" + this.state.value).then(project => {
            const responce = project.data;
            const { history } = this.props;
            history.push({ pathname: '/Projects', state: responce });
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
                    <label>
                        <input className="form-control mr-sm-2" type="text" value={this.state.value} placeholder="Search" onChange={this.handleChange}/>
                    </label>
                    <input className="btn btn-outline-success my-2 my-sm-0" value="Search" type="submit" />
                </form>
            </div>
        )
    }
} 
import React from 'react';
import { DropdownButton, Dropdown, } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class DropdownCategoryProject extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DropdownButton variant="dark" title={
                <font size="4" face="Tahoma" className="text-muted">Проекты</font>
            }>
                <Dropdown.Item>
                    <Link to='/design' style={{ color: "black" }}>Дизайн</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to='/music' style={{ color: "black" }}>Музыка</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to='/business' style={{ color: "black" }}>Бизнес</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to='/initiatives' style={{ color: "black" }}>Инициативы</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <Link to='/all' style={{ color: "black" }}>Все проекты</Link>
                </Dropdown.Item>
            </DropdownButton>
        );
    }
}
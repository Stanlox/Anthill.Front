import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default class DropdownCategoryProject extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DropdownButton variant="dark" title={
                <font size="4" face="Tahoma" className="text-muted">Проекты</font>
            }>
                <Dropdown.Item href="/about">Дизайн</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Музыка</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Бизнес</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Инициативы</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-1">Все проекты</Dropdown.Item>
            </DropdownButton>
        );
    }
}
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
                <Dropdown.Item href="/design">Дизайн</Dropdown.Item>
                <Dropdown.Item href="/music">Музыка</Dropdown.Item>
                <Dropdown.Item href="/business">Бизнес</Dropdown.Item>
                <Dropdown.Item href="/initiatives">Инициативы</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/all">Все проекты</Dropdown.Item>
            </DropdownButton>
        );
    }
}
import React from 'react';
import './SearchBar.css';
import {
    Col,
    Form,
    Input
} from 'reactstrap';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <Form>
                <Col sm="12" md={{'size': 6, 'offset':3}} lg="6">
                    <Input type="text" placeholder="What are you looking for?" className="input-underlined" />
                </Col>
            </Form>
        </div>
    )
}

export default SearchBar;
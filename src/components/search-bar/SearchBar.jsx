import React from 'react';
import './SearchBar.css';
import {
    Col,
    Input
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <Col sm="12" md={{'size': 6, 'offset':3}} lg="6">
                <Input type="text" placeholder="What are you looking for?" />
            </Col>
        </div>
    )
}

export default SearchBar;
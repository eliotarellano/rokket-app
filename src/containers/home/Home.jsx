import React from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import SearchBar from '../../components/search-bar/SearchBar';
import PostsList from '../../components/posts-list/PostsList';
import {
    Col,
} from 'reactstrap';

const Home = () => {
    return (
        <div className="home">
            <Col sm="12" md="12" lg="12" className="p-4">
                <Header />
            </Col>
            <Col sm="12" md="12" lg="12" className="p-4">
                <SearchBar />
            </Col>
            <Col sm="12" md="12" lg="12" className="p-4">
                <PostsList />
            </Col>
        </div>
    )
}

export default Home;
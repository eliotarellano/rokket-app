import React from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import SearchBar from '../../components/search-bar/SearchBar';
import PostsList from '../../components/posts-list/PostsList';
import {
    Col,
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = (props) => {

    return (
        <div className="home">
            <ScrollAnimation className="skills-animation-container" animateIn="fadeIn" duration="2">
                <Col sm="12" md="12" lg="12" className="p-4">
                    <Header />
                </Col>
                <Col sm="12" md="12" lg="12" className="p-4">
                    <SearchBar />
                </Col>
                <Col sm="12" md="12" lg="12" className="p-4">
                    <PostsList />
                </Col>
            </ScrollAnimation>
        </div>
    )
}

export default Home;
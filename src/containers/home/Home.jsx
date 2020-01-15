import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Home.scss';
import Header from '../../components/header/Header';
import SearchBar from '../../components/search-bar/SearchBar';
import PostsList from '../../components/posts-list/PostsList';
import {
    Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import { findPostsAsyncActionCreator } from '../../store/modules/post/actions';

const Home = (props) => {
    // assigning the useDispatch function to a const

    const dispatch = useDispatch();

    // getting data from store

    const postsModule = useSelector(store => store.posts);
    const [loading, setLoading] = useState(true);
    const loadingRd = postsModule.loading;

    // effect hook that sets a time out of one seconds to load the view

    useEffect(() => {
        dispatch(findPostsAsyncActionCreator());
        setTimeout(() => {
            if ( loadingRd ) {
                setLoading(true);
            } else {
                setLoading(false);
            }  
        }, 1000);
    },[]);

    // returning component

    return (
        <div className="home">
            {loading ? (
                <Col sm="12" md="12" lg="12" className="text-center">
                    <FontAwesomeIcon className="home-loading vh-100" icon={faRedoAlt} spin={true} size="2x" />
                </Col>
            ) : (
                <ScrollAnimation className="skills-animation-container" animateIn="fadeIn" duration={2}>
                    <Col sm="12" md="12" lg="12" className="p-2">
                        <Header />
                    </Col>
                    <Col sm="12" md="12" lg="12" className="p-2">
                        <SearchBar filter={postsModule.filter} />
                    </Col>
                    <Col sm="12" md="12" lg="12" className="mb-4">
                        <PostsList data={postsModule.data} />
                    </Col>
                </ScrollAnimation>
            )}
        </div>
    )
}

export default Home;
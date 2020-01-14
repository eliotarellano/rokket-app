import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';
import {
    Col,
    Input,
    Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { findPostsAsyncActionCreator, findPostsByNameAsyncActionCreator } from '../../store/modules/post/actions';

const SearchBar = (props) => {
    const dispatch = useDispatch();
    const postsModule = useSelector(store => store.posts);
    const [tagName, setTagName] = useState('');
    const filter = postsModule.filter;
    const userFilter = postsModule.userFilter;

    const handleOnClick = () => {
        if ( tagName === '' ) {
            dispatch(findPostsAsyncActionCreator());
        } else {
            dispatch(findPostsByNameAsyncActionCreator(tagName));
            setTagName('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            if ( tagName === '' ) {
                dispatch(findPostsAsyncActionCreator());
            } else {
                dispatch(findPostsByNameAsyncActionCreator(tagName));
                setTagName('');
            }
        }
    };

    const handleOnDelete = () => {
        dispatch(findPostsAsyncActionCreator());
        setTagName('');
    };

    return (
        <div className="search-bar">
            { !userFilter ? (
                <div>
                    <Col sm="12" md={{'size': 8, 'offset': 2}} lg={{'size': 6, 'offset': 3}} className="d-flex align-items-center">
                        <Input
                            type="text"
                            className="sb-custom-input mr-4" 
                            placeholder="Search..."
                            value={tagName}
                            onChange={(event) => setTagName(event.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <Button 
                            color="info"
                            className="sb-custom-button"
                            onClick={handleOnClick}>
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </Col>
                    { filter ? (
                        <Col sm="12" md={{'size': 8, 'offset': 2}} lg={{'size': 6, 'offset': 3}} className="d-flex align-items-center">
                            <Button 
                                color="info"
                                className="sb-detele-btn">
                                <span>{filter + ' '}&nbsp;&nbsp;<FontAwesomeIcon icon={faTimes} className="sb-custom-b" onClick={handleOnDelete} /></span>
                            </Button>
                        </Col>
                    ) : (
                        <div></div>
                    ) }
                </div>
            ) : (
                <div></div>
            ) }
        </div>
    )
}

export default SearchBar;
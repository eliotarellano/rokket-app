import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PostsList.css';
import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import { findPostsAsyncActionCreator } from '../../store/modules/post/actions';

const PostList = (props) => {
    const dispatch = useDispatch();
    const postsModule = useSelector(store => store.posts);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            dispatch(findPostsAsyncActionCreator());
            setLoading(false);
        }, 600);
    },[])

    return (
        <div className="post-list">
            {loading 
                ?
                    <FontAwesomeIcon className="post-spin" icon={faCircleNotch} spin="true" size="2x" /> 
                :
                (
                    <ScrollAnimation className="skills-animation-container" animateIn="fadeIn" duration="2">                    
                        <Col sm="12" md={{'size': 6, 'offset':3}} lg={{'size': 6, 'offset':3}}>
                            {postsModule.data.map((post) => (
                                <Card key={post.id} className="mt-4">
                                    <CardBody>
                                        <Col className="row pl-md-3">
                                            <CardImg className="post-user-avatar" src={post.owner.image} alt="" />
                                            <CardTitle className="ml-3">{post.owner.firstName + ' ' + post.owner.lastName}</CardTitle>
                                        </Col>
                                    </CardBody>
                                    <CardImg src={post.image} alt="" />
                                    <CardBody>
                                        {post.tags.map((tag) => (
                                            <CardLink href="#">{tag}</CardLink>
                                        ))}
                                        <CardText>{post.message}</CardText>
                                    </CardBody>
                                    <CardBody>
                                        <CardText>a few seconds ago</CardText>
                                    </CardBody>
                                </Card>
                            ))}
                        </Col>
                    </ScrollAnimation>
                )
            }
        </div>
    )
}

export default PostList;
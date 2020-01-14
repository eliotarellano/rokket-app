import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import './PostsList.css';
import Context from '../../context/Context';
import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle
} from 'reactstrap';
import { findPostsByNameAsyncActionCreator } from '../../store/modules/post/actions';

const PostList = (props) => {
    const dispatch = useDispatch();
    const themeData = useContext(Context);

    const handleOnClick = (event) => {
        const tagName = event.target.innerText;
        dispatch(findPostsByNameAsyncActionCreator(tagName));
    };

    return (
        <div className="post-list">   
            <Col sm="12" md={{'size': 8, 'offset': 2}} lg={{'size': 6, 'offset': 3}}>
                { props.data.map(( post ) => (
                    <Card 
                        key={ post.id }
                        className={
                            themeData.theme === 'light' 
                            ? 'posts-card-light mt-4'
                            :' posts-card-dark mt-4'
                        }
                    >
                        <CardBody>
                            <Col className="row pl-md-3 align-items-center">
                                <CardImg className="post-user-avatar" src={ post.owner.image } alt="" />
                                <CardTitle className="ml-3 align-self-end">{ post.owner.firstName + ' ' + post.owner.lastName }</CardTitle>
                            </Col>
                        </CardBody>
                        <CardImg src={ post.image } alt="" />
                        <CardBody>
                            { post.tags.map(( tag, index ) => (
                                <CardLink key={ index } href="#" className="posts-card-link" onClick={handleOnClick}>{ tag }</CardLink>
                            ))}
                            <CardText>
                                <b>{ post.owner.firstName.toLowerCase() + post.owner.lastName.toLowerCase() }</b>
                                &nbsp;{ ' ' + post.message }
                            </CardText>
                            <CardText>a few seconds ago</CardText>
                        </CardBody>
                    </Card>
                ))}
            </Col>
        </div>
    )
}

export default PostList;
import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PostsList.css';
import Context from '../../context/Context';
import UserCard from'../user-card/UserCard';
import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle
} from 'reactstrap';
import { findPostsByNameAsyncActionCreator, findPostsByUserAsyncActionCreator } from '../../store/modules/post/actions';
import { findUserByIAsyncActionCreator } from '../../store/modules/user/actions';

const PostList = (props) => {
    const dispatch = useDispatch();
    const postsModule = useSelector(store => store.posts);
    const userModule = useSelector(store => store.user);
    const themeData = useContext(Context);
    const userFilter = postsModule.userFilter;

    const handleOnClickUser = (event) => {
        const userId = event.target.id;
            dispatch(findPostsByUserAsyncActionCreator(userId));
            dispatch(findUserByIAsyncActionCreator(userId));
    };

    const handleOnClick = (event) => {
        const tagName = event.target.innerText;
        dispatch(findPostsByNameAsyncActionCreator(tagName));
    };


    return (
        <div className="post-list">
            { userFilter ? (
                <UserCard data={userModule.data} />
            ) : (
                <div></div>
            )}
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
                                <CardImg id={post.owner.id} className="post-user-avatar" src={ post.owner.image } alt="" onClick={handleOnClickUser} />
                                <CardTitle id={post.owner.id} className="post-user-name ml-3 align-self-end" onClick={handleOnClickUser}>{ post.owner.firstName + ' ' + post.owner.lastName }</CardTitle>
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
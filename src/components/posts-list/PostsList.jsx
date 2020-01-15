import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PostsList.scss';
import Context from '../../context/Context';
import UserCard from'../user-card/UserCard';
import {
    Col,
    Row,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle
} from 'reactstrap';
import { findPostsByNameAsyncActionCreator, findPostsByUserAsyncActionCreator } from '../../store/modules/post/actions';
import { findUserByIAsyncActionCreator } from '../../store/modules/user/actions';
import { findCommentsByPostIdAsyncActionCreator, clearCommentList } from '../../store/modules/comment/actions';

const PostList = (props) => {
    // assigning the useDispatch function to a const

    const dispatch = useDispatch();

    // getting data from store

    const postsModule = useSelector(store => store.posts);
    const userModule = useSelector(store => store.user);
    const commentsModule = useSelector(store => store.comments);
    const userFilter = postsModule.userFilter;

    // getting global theme

    const themeData = useContext(Context);

    // onClick function that dispatch the findpostbyuser and finduserbyid actions

    const handleOnClickUser = (event) => {
        const userId = event.target.id;
        dispatch(findPostsByUserAsyncActionCreator(userId));
        dispatch(findUserByIAsyncActionCreator(userId));
        dispatch(clearCommentList());
    };

    // onClick function that dispatch the findpostsbyname action

    const handleOnClick = (event) => {
        const tagName = event.target.innerText;
        dispatch(findPostsByNameAsyncActionCreator(tagName));
        dispatch(clearCommentList());
    };

    // onClick function that dispatch the findcommentsbypostid action

    const handlePostDetail = (event) => {
        const postId = event.target.id;
        dispatch(findCommentsByPostIdAsyncActionCreator(postId));
    };

    // returning component

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
                            <CardText id={post.id} className="post-view-comments" onClick={handlePostDetail}>View all comments</CardText>
                                {commentsModule.data.filter(comment => comment.post === post.id).map((comment, index) => {
                                    return (
                                        <Row key={index} className="post-comment">
                                            <Col sm="12" md="12" lg="12" className="mb-2">
                                                <img src={comment.owner.image} alt="" className="post-comment-img mr-2" />
                                                <b className="mr-2">
                                                    {comment.owner.firstName.toLowerCase()+comment.owner.lastName.toLowerCase()}
                                                </b>
                                                {' ' +comment.message}
                                            </Col>
                                        </Row>
                                    )
                                })}
                            <CardText>a few seconds ago</CardText>
                        </CardBody>
                    </Card>
                ))}
            </Col>
        </div>
    )
}

export default PostList;
import { getCommentsByPostId } from '../../../client/comment.client';

import {
    COMMENT_FIND_BY_POST_ID_START,
    COMMENT_FIND_BY_POST_ID_OK,
    COMMENT_FIND_BY_POST_ID_NOK,
    CLEAR_COMMENT_LIST
} from './const';

// find comments by post id action creator

const findCommentsByPostIdActionCreator = () => ({
    type: COMMENT_FIND_BY_POST_ID_START,
    payload: null
});

// payload data definition on successful connection

const findCommentsByPostIdOkActionCreator = (data, postId) => ({
    type: COMMENT_FIND_BY_POST_ID_OK,
    payload: data,
    postId: postId
});

// error message definition when connection isn't successful

const findCommentsByPostIdNokActionCreator = (errorMessage) => ({
    type: COMMENT_FIND_BY_POST_ID_NOK,
    payload: errorMessage
});

// find comments by post id asynchronous action creator

export const findCommentsByPostIdAsyncActionCreator = (postId) => {
    return (dispatch, getStore) => {
        dispatch(findCommentsByPostIdActionCreator());
        getCommentsByPostId(postId)
        .catch(error => {
            dispatch(findCommentsByPostIdNokActionCreator('Error:', error));
        }).then(response => {
            if ( !response ) {
                dispatch(findCommentsByPostIdNokActionCreator('Error: generico'));
            } else {
                dispatch(findCommentsByPostIdOkActionCreator(response.data))
            }
        });
    }
};

// clear comment list

export const clearCommentList = () => ({
    type: CLEAR_COMMENT_LIST,
    payload: null
});
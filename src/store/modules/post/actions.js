import {
    getPostsList,
    getPostCreatedByUser,
    getPostByTags
} from '../../../client/post.client';

import {
    POST_FIND_ALL_START,
    POST_FIND_ALL_OK,
    POST_FIND_ALL_NOK,
    POST_FIND_BY_NAME_START,
    POST_FIND_BY_NAME_OK,
    POST_FIND_BY_NAME_NOK,
    POST_FIND_BY_USER_START,
    POST_FIND_BY_USER_OK,
    POST_FIND_BY_USER_NOK
} from './const';

// FIND ALL POSTS

const findAllPostsActionCreator = () => ({
    type: POST_FIND_ALL_START,
    payload: null
});

const findAllPostsOkActionCreator = (data) => ({
    type: POST_FIND_ALL_OK,
    payload: data
});

const findAllPostsNokActionCreator = (errorMessage) => ({
    type: POST_FIND_ALL_NOK,
    payload: errorMessage
});

export const findPostsAsyncActionCreator = () => {
    return (dispatch, getStore) => {
        dispatch(findAllPostsActionCreator());
        getPostsList()
        .catch(error => {
            dispatch(findAllPostsNokActionCreator('Error:', error));
        }).then(response => {
            if (!response) {
                dispatch(findAllPostsNokActionCreator('Error: generico'));
            } else {    
                dispatch(findAllPostsOkActionCreator(response.data));
            }
        });
    }
};

// FIND POSTS BY NAME

const findPostsByNameActionCreator = () => ({
    type: POST_FIND_BY_NAME_START,
    payload: null
});

const findPostsByNameOkActionCreator = (data, tagName) => ({
    type: POST_FIND_BY_NAME_OK,
    payload: data,
    tagName: tagName
});

const findPostsByNameNokActionCreator = (errorMessage) => ({
    type: POST_FIND_BY_NAME_NOK,
    payload: errorMessage
});

export const findPostsByNameAsyncActionCreator = (tagName) => {
    return (dispatch, getStore) => {
        dispatch(findPostsByNameActionCreator());
        getPostByTags(tagName)
        .catch(error => {
            dispatch(findPostsByNameNokActionCreator('Error:', error));
        }).then(response => {
            if (!response) {
                dispatch(findPostsByNameNokActionCreator('Error: generico'));
            } else {    
                dispatch(findPostsByNameOkActionCreator(response.data, tagName));
            }
        });
    }
};

// FIND POST BY USER

const findPostsByUserActionCreator = () => ({
    type: POST_FIND_BY_USER_START,
    payload: null
});

const findPostsByUserOkActionCreator = (data, userName) => ({
    type: POST_FIND_BY_USER_OK,
    payload: data,
    userName: userName
});

const findPostsByUserNokActionCreator = (errorMessage) => ({
    type: POST_FIND_BY_USER_NOK,
    payload: errorMessage
});

export const findPostsByUserAsyncActionCreator = (userName) => {
    return (dispatch, getStore) => {
        dispatch(findPostsByUserActionCreator());
        getPostCreatedByUser(userName)
        .catch(error => {
            dispatch(findPostsByUserNokActionCreator('Error:', error));
        }).then(response => {
            if ( !response ) {
                dispatch(findPostsByUserNokActionCreator('Error: generico'));
            } else {
                dispatch(findPostsByUserOkActionCreator(response.data, userName))
            }
        });
    }
};
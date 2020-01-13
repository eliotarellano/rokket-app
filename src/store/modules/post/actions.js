import {
    getPostsList,
    getPostById,
    getPostCreatedByUser,
    getPostByTags
} from '../../../client/post.client';

import {
    POST_FIND_ALL_START,
    POST_FIND_ALL_OK,
    POST_FIND_ALL_NOK
} from './const';

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

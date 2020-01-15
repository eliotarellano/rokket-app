import {
    API,
    POST_MODULE,
    COMMENT_MODULE
} from './config';

// get comments by post id

export const getCommentsByPostId = (postId) => {
    return fetch(`${API}/${POST_MODULE}/${postId}/${COMMENT_MODULE}`, {
        method: 'GET'
    }).then(response => response.json());
}
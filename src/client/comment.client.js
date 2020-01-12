import {
    API,
    POST_MODULE,
    COMMENT_MODULE
} from './config';

export const getTagsList = (postId) => {
    return fetch(`${API}/${POST_MODULE}/${postId}/${COMMENT_MODULE}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}
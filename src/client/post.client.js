import {
    API,
    POST_MODULE,
    USER_MODULE,
    TAG_MODULE
} from './config';

// get posts list

export const getPostsList = () => {
    return fetch(`${API}/${POST_MODULE}`, {
        method: 'GET'
    }).then(response => response.json());
}

// get post by id

export const getPostById = (postId) => {
    return fetch(`${API}/${POST_MODULE}/${postId}`, {
        method: 'GET'
    }).then(response => response.json());
}

// get posts by author id

export const getPostCreatedByUser = (userId) => {
    return fetch(`${API}/${USER_MODULE}/${userId}/${POST_MODULE}`, {
        method: 'GET'
    }).then(response => response.json());
}

// get posts by tags

export const getPostByTags = (tagName) => {
    return fetch(`${API}/${TAG_MODULE}/${tagName}/${POST_MODULE}`, {
        method: 'GET'
    }).then(response => response.json());
}
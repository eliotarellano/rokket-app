import {
    API,
    POST_MODULE,
    USER_MODULE,
    TAG_MODULE
} from './config';

export const getPostsList = () => {
    return fetch(`${API}/${POST_MODULE}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}

export const getPostById = (postId) => {
    return fetch(`${API}/${POST_MODULE}/${postId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}

export const getPostCreatedByUser = (userId) => {
    return fetch(`${API}/${USER_MODULE}/${userId}/${POST_MODULE}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}

export const getPostByTags = (tagName) => {
    return fetch(`${API}/${TAG_MODULE}/${tagName}/${POST_MODULE}`, {
        method: 'GET'
    }).then(response => response.json());
}
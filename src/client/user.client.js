import {
    API,
    USER_MODULE
} from './config';

// get users list

export const getUsersList = () => {
    return fetch(`${API}/${USER_MODULE}`, {
        method: 'GET'
    }).then(response => response.json());
}

// get user information by id

export const getUserInformation = (userId) => {
    return fetch(`${API}/${USER_MODULE}/${userId}`, {
        method: 'GET'
    }).then(response => response.json());
}
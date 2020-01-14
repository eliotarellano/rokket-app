import {
    API,
    USER_MODULE
} from './config';

export const getUsersList = () => {
    return fetch(`${API}/${USER_MODULE}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}

export const getUserInformation = (userId) => {
    return fetch(`${API}/${USER_MODULE}/${userId}`, {
        method: 'GET'
    }).then(response => response.json());
}
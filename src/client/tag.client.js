import {
    API,
    TAG_MODULE
} from './config';

// get tags list

export const getTagsList = () => {
    return fetch(`${API}/${TAG_MODULE}`, {
        method: 'GET'
    }).then(response => response.json());
}
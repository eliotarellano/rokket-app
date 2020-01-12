import {
    API,
    TAG_MODULE
} from './config';

export const getTagsList = () => {
    return fetch(`${API}/${TAG_MODULE}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
}
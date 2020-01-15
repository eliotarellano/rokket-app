import { getUserInformation } from '../../../client/user.client';

import {
    USER_FIND_BY_ID,
    USER_FIND_BY_ID_OK,
    USER_FIND_BY_ID_NOK
} from './const';

// find user by id action creator

const findUserByIdActionCreator = () => ({
    type: USER_FIND_BY_ID,
    payload: null
});

// payload data definition on successful connection

const findUserByIdOkActionCreator = (data) => ({
    type: USER_FIND_BY_ID_OK,
    payload: data
});

// error message definition when connection isn't successful

const findUserByIdNokActionCreator = (errorMessage) => ({
    type: USER_FIND_BY_ID_NOK,
    payload: errorMessage
});

// find user by id asynchronous action creator

export const findUserByIAsyncActionCreator = (userId) => {
    return (dispatch, getStore) => {
        dispatch(findUserByIdActionCreator());
        getUserInformation(userId)
        .catch(error => {
            dispatch(findUserByIdNokActionCreator('Error:', error));
        }).then(response => {
            if (!response) {
                dispatch(findUserByIdNokActionCreator('Error: generico'));
            } else {    
                dispatch(findUserByIdOkActionCreator(response));
            }
        });
    }
};
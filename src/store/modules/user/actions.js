import { getUserInformation } from '../../../client/user.client';

import {
    USER_FIND_BY_ID,
    USER_FIND_BY_ID_OK,
    USER_FIND_BY_ID_NOK
} from './const';

// FIND USER BY ID

const findUserByIdActionCreator = () => ({
    type: USER_FIND_BY_ID,
    payload: null
});

const findUserByIdOkActionCreator = (data) => ({
    type: USER_FIND_BY_ID_OK,
    payload: data
});

const findUserByIdNokActionCreator = (errorMessage) => ({
    type: USER_FIND_BY_ID_NOK,
    payload: errorMessage
});

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
import {
    POST_FIND_ALL_START,
    POST_FIND_ALL_OK,
    POST_FIND_ALL_NOK,
    POST_FIND_BY_NAME_START,
    POST_FIND_BY_NAME_OK,
    POST_FIND_BY_NAME_NOK,
    POST_FIND_BY_USER_START,
    POST_FIND_BY_USER_OK,
    POST_FIND_BY_USER_NOK
} from './const';

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: null,
    filter: '',
    userFilter: '',
    errorMessage: ''
};

const postsReducer = ( prevState = initialState, action ) => {
    switch (action.type) {
        case POST_FIND_ALL_START:
            return {
                ...prevState,
                loading: true
            }
        case POST_FIND_ALL_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                filter: '',
                userFilter: '',
                data: action.payload
            }
        case POST_FIND_ALL_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload
            }
        case POST_FIND_BY_NAME_START:
            return {
                ...prevState,
                loading: true
            }
        case POST_FIND_BY_NAME_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                filter: action.tagName,
                userFilter: '',
                data: action.payload
            }
        case POST_FIND_BY_NAME_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload
            }
        case POST_FIND_BY_USER_START:
            return {
                ...prevState,
                loading: true
            }
        case POST_FIND_BY_USER_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                userFilter: action.userName,
                data: action.payload
            }
        case POST_FIND_BY_USER_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload
            }
        default:
            return prevState;
    }
};

export default postsReducer;
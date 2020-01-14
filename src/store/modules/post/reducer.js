import {
    POST_FIND_ALL_START,
    POST_FIND_ALL_OK,
    POST_FIND_ALL_NOK,
    POST_FIND_BY_NAME_START,
    POST_FIND_BY_NAME_OK,
    POST_FIND_BY_NAME_NOK,
} from './const';

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: null,
    filter: '',
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
        default:
            return prevState;
    }
};

export default postsReducer;
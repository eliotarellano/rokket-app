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

// initializing redux state

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: null,
    filter: '',
    userFilter: '',
    postFilter: '',
    errorMessage: ''
};

const postsReducer = ( prevState = initialState, action ) => {
    switch (action.type) {

        // loading definition on redux state

        case POST_FIND_ALL_START:
            return {
                ...prevState,
                loading: true
            }

        // data definition on redux state

        case POST_FIND_ALL_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                filter: '',
                userFilter: '',
                postFilter: '',
                data: action.payload
            }

        // error and errorMessage definition on redux state 

        case POST_FIND_ALL_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload
            }

        // loading definition on redux state

        case POST_FIND_BY_NAME_START:
            return {
                ...prevState,
                loading: true
            }

        // data definition on redux state

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

        // error and errorMessage definition on redux state  

        case POST_FIND_BY_NAME_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload
            }

        // loading definition on redux state

        case POST_FIND_BY_USER_START:
            return {
                ...prevState,
                loading: true
            }

        // data definition on redux state

        case POST_FIND_BY_USER_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                userFilter: action.userName,
                data: action.payload
            }

        // error and errorMessage definition on redux state

        case POST_FIND_BY_USER_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload
            }

        // return of previous redux state

        default:
            return prevState;
    }
};

export default postsReducer;
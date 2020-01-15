import {
    COMMENT_FIND_BY_POST_ID_START,
    COMMENT_FIND_BY_POST_ID_OK,
    COMMENT_FIND_BY_POST_ID_NOK,
    CLEAR_COMMENT_LIST
} from './const';

// initializing redux state

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: null,
    errorMessage: ''
};

const commentsReducer = ( prevState = initialState, action ) => {
    switch (action.type) {

        // loading definition on redux state

        case COMMENT_FIND_BY_POST_ID_START:
            return {
                ...prevState,
                loading: true
            }

        // data definition on redux state

        case COMMENT_FIND_BY_POST_ID_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                data: action.payload
            }

        // error and errorMessage definition on redux state

        case COMMENT_FIND_BY_POST_ID_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload
            }

        // loading definition on redux state

        case CLEAR_COMMENT_LIST:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: null,
                data: []
            }

        // return of previous redux state

        default:
            return prevState;
    }
};

export default commentsReducer;
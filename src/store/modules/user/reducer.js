import {
    USER_FIND_BY_ID,
    USER_FIND_BY_ID_OK,
    USER_FIND_BY_ID_NOK
} from './const';

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: null,
    errorMessage: ''
};

const userReducer = ( prevState = initialState, action ) => {
    switch (action.type) {
        case USER_FIND_BY_ID:
            return {
                ...prevState,
                loading: true
            }
        case USER_FIND_BY_ID_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: null,
                data: action.payload
            }
        case USER_FIND_BY_ID_NOK:
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

export default userReducer;
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import postsReducer from './modules/post/reducer';
import userReducer from './modules/user/reducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
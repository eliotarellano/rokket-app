import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import postsReducer from './modules/post/reducer';
import userReducer from './modules/user/reducer';
import commentsReducer from './modules/comment/reducer';

// root reducer that stores posts, comments and user data

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer
});

// creation of the store and the redux thunk usage for asynchronous functions

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
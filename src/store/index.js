import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import postsReducer from './modules/post/reducer';

const rootReducer = combineReducers({
    posts: postsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
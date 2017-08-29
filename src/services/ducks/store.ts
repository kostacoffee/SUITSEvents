import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import * as reducers from './reducers';

const rootReducer = combineReducers({
    ...reducers,
});

const logger = createLogger({
    //predicate: (getState, action) => !action.type.startsWith("@@")
});

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);

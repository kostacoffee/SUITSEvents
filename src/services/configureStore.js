import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger';
import * as reducers from './ducks'

const rootReducer = combineReducers(reducers);

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    );

    return store;

}

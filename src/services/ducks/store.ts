import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { createBrowserHistory } from 'history';
import { routerReducer, routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import { reducer as formReducer } from 'redux-form';
import * as reducers from './reducers';

export const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

const rootReducer = combineReducers({
    ...reducers,
    form: formReducer,
    router: routerReducer
});

const logger = createLogger({
    predicate: (getState, action) => !action.type.startsWith("@@")
});

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        routerMiddleware,
        logger
    )
);

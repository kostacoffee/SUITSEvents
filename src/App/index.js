import React from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger';

import { BrowserRouter } from 'react-router-dom';

import * as reducers from 'services/ducks'
import App from './App';

const rootReducer = combineReducers(reducers);

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

export default Root;

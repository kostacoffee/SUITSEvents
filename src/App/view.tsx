/* Root App element
 * Sets up Redux store
 */
import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { SFC } from 'App/types';

const App: SFC = ({ isLoggedIn }) => (
    <div>
        <Route path='/login' render={() => (
            isLoggedIn ?
                <Redirect to='/dashboard' />
                :
                <Login />
        )} />

        <Route path='/dashboard' render={() => (
            isLoggedIn ?
                <Dashboard />
                :
                <Redirect to='/login' />
        )} />

        <Route path='/' render={() => (
            isLoggedIn ?
                <Redirect to='/dashboard' />
                :
                <Redirect to='/login' />
        )} />
    </div>
);

export default App;

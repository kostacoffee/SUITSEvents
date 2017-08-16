/* Root App element
 * Sets up Redux store
 */
import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Dashboard from './Dashboard';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { selectors } from 'services/ducks/auth';

const mapStateToProps = (state) => ({
    isLoggedIn: selectors.isLoggedIn(state)
})

const App = ({ isLoggedIn }) => (
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

export default withRouter(connect(mapStateToProps)(App));

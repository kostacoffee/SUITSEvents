/* Root App element
 * Sets up Redux store
 */
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import Login from './screens/Login';
import { Layout } from 'antd';
import configureStore from 'services/configureStore';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Layout>
            <Login />
        </Layout>
    </Provider>
);

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from 'services/ducks/store'
import App from './container';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


const Root = () : JSX.Element => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LocaleProvider locale={enUS}>
                <App />
            </LocaleProvider>
        </ConnectedRouter>
    </Provider>
);

export default Root;

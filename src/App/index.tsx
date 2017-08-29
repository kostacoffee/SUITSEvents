import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { store } from 'services/ducks/store'
import App from './container';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


const Root = () : JSX.Element => (
    <Provider store={store}>
        <HashRouter>
            <LocaleProvider locale={enUS}>
                <App />
            </LocaleProvider>
        </HashRouter>
    </Provider>
);

export default Root;

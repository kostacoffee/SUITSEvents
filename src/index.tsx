/* Entry point for React
 * Contains logic for mounting the root element
 * and Hot Reload
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App'

const render = (Component: () => JSX.Element) :void => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>
        ,
        document.getElementById('root')
    );
}

render(App);

if (module.hot) {
    module.hot.accept('./App', () => { render(App) });
}

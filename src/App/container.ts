import React from 'react';
import { connect } from 'react-redux';
import { selectors } from 'services/ducks/auth';
import { withRouter } from 'react-router-dom';
import View from './view';
import State from 'services/state';

const mapStateToProps = (state: State) => ({
    isLoggedIn: selectors.isLoggedIn(state)
})

export default withRouter(connect(mapStateToProps)(View));

import React from 'react';
import { connect } from 'react-redux';

import { logIn } from '../../../store/actions/auth.actions'
import LoginPage from "./LoginPage.component";

export default {
    component: connect(null, { logIn })(LoginPage)
}

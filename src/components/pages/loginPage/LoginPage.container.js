import React from 'react';
import { connect } from 'react-redux';

import { logIn } from '../../../store/actions/auth.actions'
import LoginPage from "./LoginPage.component";
import withoutAuthRedirect from "../../hocs/withoutAuthRedirect";

export default {
    component: withoutAuthRedirect(connect(null, { logIn })(LoginPage))
}

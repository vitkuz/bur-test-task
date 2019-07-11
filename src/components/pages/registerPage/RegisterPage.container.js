import React from 'react';
import { connect } from 'react-redux';

import { register } from '../../../store/actions/auth.actions'
import RegisterPage from './RegisterPage.component';
import withoutAuthRedirect from "../../hocs/withoutAuthRedirect";

export default {
  component: withoutAuthRedirect(connect(null, { register })(RegisterPage))
}

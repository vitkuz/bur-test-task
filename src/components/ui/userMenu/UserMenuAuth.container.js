import React from 'react';
import { connect } from 'react-redux';

import UserMenuAuth from './UserMenuAuth.component';

import { logOut } from '../../../store/actions/auth.actions'

export default connect(null, { logOut })(UserMenuAuth);

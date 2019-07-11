import React from 'react';
import { connect } from 'react-redux';

import UserMenu from './UserMenu.component';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps, null)(UserMenu);

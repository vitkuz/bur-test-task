import React, { PureComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import withAuth from '../../hocs/withAuth'

export class ProfilePage extends PureComponent {
    componentDidMount() {
        // this.props.fetchProfile();
    }

    render() {
        return (
            <div className={`page page-user-profile`}>
                <h3>Secret Profile Page</h3>
                <p>Secret Profile Page</p>
            </div>
        )
    }
}

export default {
    component: withAuth(ProfilePage),
    loadData: null
};

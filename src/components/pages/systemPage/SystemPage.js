import React, { PureComponent } from 'react';

import withRedirect from '../../hocs/withRedirect';
// import withAuth from '../../hocs/withAuth';

export class ProfilePage extends PureComponent {
    componentDidMount() {
        // this.props.fetchStats();
    }

    render() {
        return (
            <div className={`page page-system`}>
                <h3>Secret Profile Page</h3>
                <p>Secret Profile Page</p>
            </div>
        )
    }
}

export default {
    component: withRedirect(ProfilePage),
    // component: withAuth(ProfilePage),
    loadData: null
};

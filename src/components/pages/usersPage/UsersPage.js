import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers, setUsers } from '../../../store/actions/actions';
import loadUsers from '../../../loaders/loadUsers';

import { connect } from 'react-redux';

const renderUsers = (users) => {
  //todo: create user card component
  return users.map(({ id, username, email}) => <div key={id}><Link to={`/user/${id}`}>{username}</Link><p>{email}</p></div>)
};

export class UsersPage extends PureComponent {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if(this.props.users && this.props.users.length > 0) {
      return (
        <div className={`page page-home`}>
          <h3>Users page</h3>
          { renderUsers(this.props.users) }
        </div>
      )
    } else if (this.props.users && this.props.users.length === 0) {
      return <p>No results...</p>
    } else {
      return <p>Loading...</p>
    }
  }
}

export function serverLoadData(store) {
  //used for SSR
  return new Promise((resolve) => {
    loadUsers().then(users => {
      // console.log(`Loaded`, users);
      store.dispatch(setUsers(users));
      resolve();
    });
  })
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersPage),
  loadData: serverLoadData
};

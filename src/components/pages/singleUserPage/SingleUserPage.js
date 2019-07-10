import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUserById, setUser } from '../../../actions/actions';
import loadUserById from "../../../loaders/loadUserById";

export class SingleUserPage extends Component {

  componentDidMount() {
    // console.log(this.props.match.params.userId);
    this.props.fetchUserById(this.props.match.params.userId);
  }

  render() {
    // console.log(this.props.user);
    const { id, username, name, phone, website } = this.props.user;

    if (id) {
      return (
        <div className={`page page-single-user`}>
          <h1>Single user: {username}</h1>

          <div className={`user`}>
            <ul className={`user__items`}>
              <li className={`user__item`}>
                UserId: {id}
              </li>
              <li className={`user__item`}>
                Username: {username}
              </li>
              <li className={`user__item`}>
                Name: {name}
              </li>
              <li className={`user__item`}>
                Phone: {phone}
              </li>
              <li className={`user__item`}>
                Website: {website}
              </li>
            </ul>
          </div>

        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export function server_loadData(store, match) {

  const { userId } = match.params;

  //used for SSR
  return new Promise((resolve) => {
    loadUserById(userId).then(user => {
      // console.log(`Loaded...`, user);
      store.dispatch(setUser(user));
      resolve();
    });
  })
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

export default {
  component: connect(mapStateToProps, { fetchUserById })(SingleUserPage),
  loadData: server_loadData
};

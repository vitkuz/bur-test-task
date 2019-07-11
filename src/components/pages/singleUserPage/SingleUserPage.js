import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PostsList from '../../ui/postsList/PostsList';
import UserCard from '../../ui/userCard/UserCard';

import { fetchUserById, setUser } from '../../../store/actions/users/users.actions';
import loadUserById from "../../../loaders/loadUserById";
import getUserPostsSelector from "../../../store/selectors/getUserPosts.selector";

export class SingleUserPage extends PureComponent {

  componentDidMount() {
    // console.log(this.props.match.params.userId);
    this.props.fetchUserById(this.props.match.params.userId);
  }

  render() {
    // console.log(this.props.user);
    const { id, username, name, phone, website } = this.props.user;
    const posts = this.props.posts;

    if (id) {
      return (
        <div className={`page page-single-user`}>

          <UserCard user={this.props.user}/>

          <PostsList posts={posts}/>

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

export function serverLoadData(store, match) {

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
    user: state.user,
    posts: getUserPostsSelector(state.posts, state.user)
  }
};

export default {
  component: connect(mapStateToProps, { fetchUserById })(SingleUserPage),
  loadData: serverLoadData
};

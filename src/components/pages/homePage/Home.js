import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, setPosts } from '../../../actions/actions';
import loadPosts from '../../../loaders/loadPosts';

import { connect } from 'react-redux';

const renderPosts = (posts) => {
  //todo: create post card component
  return posts.map(({ id, userId, title, body}) => <div key={id} className={`post-card`}>
    <h3 className='post-card__title'><Link to={`/post/${id}`}>{title}</Link></h3>
    <p className='post-card__body'>{body}</p>
    <p className='post-card__user-name'>
      <Link to={`/user/${userId}`} className='post-card__user-name-link'>{`User #${userId}`}</Link>
    </p>
  </div>)
};

export class Home extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if(this.props.posts && this.props.posts.length > 0) {
      return (
        <div className={`page page-home`}>
          <p>Home!</p>
          { renderPosts(this.props.posts) }
        </div>
      )
    } else if (this.props.posts && this.props.posts.length === 0) {
      return <p>No results...</p>
    } else {
      return <p>Loading...</p>
    }
  }
}

export function server_loadData(store) {
  //used for SSR
  return new Promise((resolve) => {
    loadPosts().then(posts => {
      store.dispatch(setPosts(posts));
      resolve();
    });
  })
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

export default {
  component: connect(mapStateToProps, { fetchPosts })(Home),
  loadData: server_loadData
};

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, setPosts } from '../../../actions/actions';
import loadPosts from '../../../loaders/loadPosts';

import { connect } from 'react-redux';

const renderPosts = (posts) => {
  //todo: create post card component
  return posts.map(({ id, userId, title, body}) => <div key={id}><Link to={`/post/${id}`}>{title}</Link><p>{body}</p> <p>{`User #${userId}`}</p></div>)
};

export class PostsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className={`page page-posts`}>
        <p>Posts!</p>
        { renderPosts(this.props.posts) }
      </div>
    )
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
  component: connect(mapStateToProps, { fetchPosts })(PostsPage),
  loadData: server_loadData
};

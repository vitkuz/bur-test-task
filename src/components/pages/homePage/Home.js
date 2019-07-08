import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, setPosts } from '../../../actions/actions';
import loadPosts from '../../../loaders/loadPosts';

import { connect } from 'react-redux';

const renderPosts = (posts) => {
  return posts.map(({ id, title, body}) => <div key={id}><Link to={`/posts/${id}`}>{title}</Link><p>{body}</p></div>)
};

class Home extends Component {

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

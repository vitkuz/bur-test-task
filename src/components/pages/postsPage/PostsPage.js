import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, setPosts } from '../../../store/actions/posts/posts.actions';
import loadPosts from '../../../loaders/loadPosts';

import './PostPage.scss';

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

export class PostsPage extends PureComponent {
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

export function serverLoadData(store) {
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
  loadData: serverLoadData
};

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPostById, setPost } from '../../../actions/actions';
import loadPostById from "../../../loaders/loadPostById";

class SinglePostPage extends Component {

  componentDidMount() {
    // console.log(this.props.match.params.postId);
    this.props.fetchPostById(this.props.match.params.postId);
  }

  render() {
    const { id, title, body, userId } = this.props.post;

    if (id) {
      return (
        <div className={`page page-single-post`}>
          <h1>{`#${id} - ${title}`}</h1>
          <div>
            <p><Link to={`/user/${userId}`}>{`User #${userId}`}</Link></p>
          </div>
          <div>
            {body}
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

  const { postId } = match.params;

  //used for SSR
  return new Promise((resolve) => {
    loadPostById(postId).then(post => {
      // console.log(`Loaded...`, user);
      store.dispatch(setPost(post));
      resolve();
    });
  })
}

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

export default {
  component: connect(mapStateToProps, { fetchPostById })(SinglePostPage),
  loadData: server_loadData,
};

import React from 'react';

import PostCard from '../postCard/PostCard'

const PostsList = ({ posts }) => {
  return (
    <div className={`post-list`}>
      <hr/>
      <h1>Users posts list</h1>
      { (posts && posts.length > 0) ? (
        posts.map((post) => {
          return <PostCard key={post.id} {...post} />
        })
      ) : <div>No posts</div> }
    </div>
  )
}

export default PostsList;

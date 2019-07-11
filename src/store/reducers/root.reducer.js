import { combineReducers } from 'redux';

import auth from './auth.reducer';

import posts from './posts/posts.reducer';
import users from './users/users.reducer';

import user from './users/user.reducer';
import post from './posts/post.reducer';

export default combineReducers({
  auth,
  posts,
  users,
  user,
  post
})

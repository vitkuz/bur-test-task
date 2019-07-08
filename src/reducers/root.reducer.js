import { combineReducers } from 'redux';

import auth from './auth.reducer';

import posts from './posts.reducer';
import users from './users.reducer';

import user from './user.reducer';
import post from './post.reducer';

export default combineReducers({
  auth,
  posts,
  users,
  user,
  post
})

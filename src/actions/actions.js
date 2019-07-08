import * as A from './actions.types';

export const fetchPosts = () => {
  return {
    type: A.FETCH_POSTS,
  }
};

export const setPosts = (posts = []) => {
  return {
    type: A.SET_POSTS,
    posts
  }
};


export const fetchUsers = () => {
  return {
    type: A.FETCH_USERS,
  }
};

export const setUsers = (users = []) => {
  return {
    type: A.SET_USERS,
    users
  }
};


export const fetchUserById = (id) => {
  return {
    type: A.FETCH_USER_BY_ID,
    id
  }
};

export const setUser = (user = {}) => {
  return {
    type: A.SET_USER,
    user
  }
};


export const fetchPostById = (id) => {
  return {
    type: A.FETCH_POST_BY_ID,
    id
  }
};

export const setPost = (post = {}) => {
  return {
    type: A.SET_POST,
    post
  }
};

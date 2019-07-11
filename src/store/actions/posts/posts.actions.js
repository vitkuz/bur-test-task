import * as A from "../actions.types";

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

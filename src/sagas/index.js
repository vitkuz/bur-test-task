import { put, takeEvery } from 'redux-saga/effects'

import { setPosts, setUsers, setUser, setPost } from "../actions/actions";
import * as A from '../actions/actions.types';

import loadPosts from '../loaders/loadPosts';
import loadUsers from '../loaders/loadUsers';
import loadUserById from '../loaders/loadUserById';
import loadPostById from '../loaders/loadPostById';

export function* setPostsAsync() {
  const posts = yield loadPosts();

  // console.log(posts);

  yield put(setPosts(posts));
}

export function* watchFetchingPosts() {
  yield takeEvery(A.FETCH_POSTS, setPostsAsync);
}


export function* setUsersAsync() {
  const users = yield loadUsers();

  // console.log(users);

  yield put(setUsers(users));
}

export function* watchFetchingUsers() {
  yield takeEvery(A.FETCH_USERS, setUsersAsync);
}


export function* setCurrentUserAsync({id}) {
  const user = yield loadUserById(id);

  // console.log(user);

  yield put(setUser(user));
}

export function* watchFetchingUserById() {
  yield takeEvery(A.FETCH_USER_BY_ID, setCurrentUserAsync);
}

export function* setCurrentPostAsync({id}) {
  const post = yield loadPostById(id);

  // console.log(post);

  yield put(setPost(post));
}

export function* watchFetchingPostById() {
  yield takeEvery(A.FETCH_POST_BY_ID, setCurrentPostAsync);
}

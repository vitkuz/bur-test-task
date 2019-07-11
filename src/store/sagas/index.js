import { put, takeEvery, call } from 'redux-saga/effects'

import { setPosts, setUsers, setUser, setPost } from "../actions/actions";
import {
  logInSuccess,
  logInFail,

  register,
  registerFail,
  registerSuccess,

  setCurrentUser
} from "../actions/auth.actions";
import * as A from '../actions/actions.types';

import loadPosts from '../../loaders/loadPosts';
import loadUsers from '../../loaders/loadUsers';
import loadUserById from '../../loaders/loadUserById';
import loadPostById from '../../loaders/loadPostById';

import sendLoginRequest from '../../loaders/sendLoginRequest';
import sendRegisterRequest from '../../loaders/sendRegisterRequest';

export function* setPostsAsync() {
  const posts = yield call(loadPosts);

  // console.log(posts);

  yield put(setPosts(posts));
}

export function* watchFetchingPosts() {
  yield takeEvery(A.FETCH_POSTS, setPostsAsync);
}


export function* setUsersAsync() {
  const users = yield call(loadUsers);

  // console.log(users);

  yield put(setUsers(users));
}

export function* watchFetchingUsers() {
  yield takeEvery(A.FETCH_USERS, setUsersAsync);
}


export function* setCurrentUserAsync({id}) {
  const user = yield call(loadUserById, id);

  // console.log(user);

  yield put(setUser(user));
}

export function* watchFetchingUserById() {
  yield takeEvery(A.FETCH_USER_BY_ID, setCurrentUserAsync);
}

export function* setCurrentPostAsync({id}) {
  const post = yield call(loadPostById, id);

  // console.log(post);

  yield put(setPost(post));
}

export function* watchFetchingPostById() {
  yield takeEvery(A.FETCH_POST_BY_ID, setCurrentPostAsync);
}

export function* tryToLoginAsync(data) {
  const loginResponse = yield call(sendLoginRequest, data);
  if (loginResponse) {
    console.log(loginResponse);
    yield put(logInSuccess(loginResponse));
    yield put(setCurrentUser(loginResponse));
  } else {
    yield put(logInFail(loginResponse))
  }
}

export function* tryToRegisterAsync() {
  const registerResponse = yield call(sendRegisterRequest, data);
  if (registerResponse) {
    console.log(registerResponse);
    yield put(logInSuccess(registerResponse));
  } else {
    yield put(logInFail(registerResponse))
  }
}

export function* watchRegister() {
  yield takeEvery(A.REGISTER_ATTEMPT, tryToRegisterAsync);
}

export function* watchLogin() {
  yield takeEvery(A.LOGIN_ATTEMPT, tryToLoginAsync);
}

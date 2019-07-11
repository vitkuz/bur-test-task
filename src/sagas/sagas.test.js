import * as SAGAS from '.';
import * as ACTIONS from '../actions/actions';
import { put, call } from 'redux-saga/effects';
import loadPosts from "../loaders/loadPosts";
import loadUsers from "../loaders/loadUsers";
import loadUserById from "../loaders/loadUserById";
import loadPostById from "../loaders/loadPostById";

import postsMock from '../tests/__mocks__/postsMock';
import usersMock from '../tests/__mocks__/usersMock';

test("setPostsAsync should load posts and set them", () => {
    const gen = SAGAS.setPostsAsync();

    expect(gen.next().value).toEqual(call(loadPosts));
    expect(gen.next(postsMock).value).toEqual(put(ACTIONS.setPosts(postsMock)));
    expect(gen.next().done).toBeTruthy();
});



test("setUsersAsync should load users and set them", () => {
    const gen = SAGAS.setUsersAsync({id:1, title: 'test user title'});

    expect(gen.next().value).toEqual(call(loadUsers));
    expect(gen.next(usersMock).value).toEqual(put(ACTIONS.setUsers(usersMock)));
    expect(gen.next().done).toBeTruthy();
});


test("setCurrentPostAsync should load one user and set it", () => {
    const gen = SAGAS.setCurrentPostAsync({ id: 1, title: 'test post title' });

    expect(gen.next().value).toEqual(call(loadPostById, 1));
    expect(gen.next(postsMock[0]).value).toEqual(put(ACTIONS.setPost(postsMock[0])));
    expect(gen.next().done).toBeTruthy();
});

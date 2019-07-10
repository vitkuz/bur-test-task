import * as ACTIONS from '../../actions/actions';
import * as TYPES from "../../actions/actions.types";

test('fetchPosts should return correct object', () => {
    const result = ACTIONS.fetchPosts();

    expect(result).toEqual({
        type: TYPES.FETCH_POSTS,
    })

});

test('setPosts  should return correct object', () => {
    const result = ACTIONS.setPosts([{ id:1, title: 'Test'}]);

    expect(result).toEqual({
        type: TYPES.SET_POSTS,
        posts: [{ id:1, title:'Test' }]
    })

});


test('fetchUsers should return correct object', () => {
    const result = ACTIONS.fetchUsers();

    expect(result).toEqual({
        type: TYPES.FETCH_USERS,
    })

});

test('setUsers should return correct object', () => {
    const result = ACTIONS.setUsers([{ id:1, title: 'Test'}]);

    expect(result).toEqual({
        type: TYPES.SET_USERS,
        users: [{ id:1, title: 'Test' }]
    })

});


test('fetchUserById should return correct object', () => {
    const result = ACTIONS.fetchUserById(1);

    expect(result).toEqual({
        type: TYPES.FETCH_USER_BY_ID,
        id: 1
    })
});

test('fetchPostById should return correct object', () => {
    const result = ACTIONS.fetchPostById(1);

    expect(result).toEqual({
        type: TYPES.FETCH_POST_BY_ID,
        id: 1
    })
});

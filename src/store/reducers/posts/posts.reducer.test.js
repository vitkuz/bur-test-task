import postReducer from './posts.reducer';
import * as TYPES from "../../actions/actions.types";

const testPosts = [{ id: 1, title: 'Test title 1' }, { id: 2, title: 'Test title 2' }];

test('postReducer should be initialized with [] (empty array)', () => {
  const result = postReducer(undefined, { type: '@@INIT' });
  expect(result).toEqual([]);
});

test('postReducer should be set posts', () => {
  const result = postReducer(undefined, { type: TYPES.SET_POSTS, posts: testPosts });
  expect(result).toEqual(testPosts);
});

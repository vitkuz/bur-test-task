import usersReducer from '../../reducers/users.reducer';
import * as TYPES from "../../actions/actions.types";

const testUsers = [{ id: 1, username: 'Username 1' }, { id: 2, username: 'Username 2' }];

test('usersReducer should be initialized with [] (empty array)', () => {
  const result = usersReducer(undefined, { type: '@@INIT' });
  expect(result).toEqual([]);
});

test('usersReducer should set users', () => {
  const result = usersReducer(undefined, { type: TYPES.SET_USERS, users: testUsers });
  expect(result).toEqual(testUsers);
});

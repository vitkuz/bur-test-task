import * as A from '../../actions/actions.types';

const defaultState = [];

export default (state = defaultState, action) => {

  switch (action.type) {

    case A.SET_USERS:
      // console.log(action.users);
      return action.users;

    default:
      return state;
  }

}

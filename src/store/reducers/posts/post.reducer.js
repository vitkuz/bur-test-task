import * as A from '../../actions/actions.types';
const defaultState = {};

export default (state = defaultState, action) => {

  switch (action.type) {

    case A.SET_POST:
      return action.post;

    default:
      return state;
  }

}

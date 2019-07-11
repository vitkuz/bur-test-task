import * as A from "../actions/actions.types";

const defaultState = null;

export default (state = defaultState, action) => {

  switch (action.type) {

    case A.SET_CURRENT_USER:

      return action.user;

    case A.LOG_OUT:

      return null;

    default:
      return state;
  }

}

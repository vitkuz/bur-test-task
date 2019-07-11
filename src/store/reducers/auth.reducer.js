import * as A from "../actions/actions.types";

const defaultState = null;

export default (state = defaultState, action) => {

  switch (action.type) {

    case A.SET_CURRENT_USER:

      console.log(A.SET_CURRENT_USER, action);

      return action.user;

    default:
      return state;
  }

}

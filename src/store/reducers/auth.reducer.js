const defaultState = null;

export default (state = defaultState, action) => {

  switch (action.type) {

    case 'SET_AUTH':
      return action.payload;

    default:
      return state;
  }

}

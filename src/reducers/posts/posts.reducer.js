import * as A from '../../actions/actions.types';

const defaultState = [];

export default (state = defaultState, action) => {

  switch (action.type) {

    case A.SET_POSTS:
      // console.debug('reducer:SET_POSTS', action.posts.length);
      return action.posts;

    default:
      return state;
  }

}

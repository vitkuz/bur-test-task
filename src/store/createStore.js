import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/root.reducer";

import {
  watchFetchingPosts,
  watchFetchingUsers,
  watchFetchingPostById,
  watchFetchingUserById,
  watchLogin,
  watchRegister,
} from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default (INITIAL_STATE = {}) => {
  //used on client and server

  console.log(INITIAL_STATE);

  const store = createStore(
    rootReducer,
    INITIAL_STATE,
    applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(watchFetchingPosts);
  sagaMiddleware.run(watchFetchingUsers);
  sagaMiddleware.run(watchFetchingPostById);
  sagaMiddleware.run(watchFetchingUserById);
  sagaMiddleware.run(watchLogin);
  sagaMiddleware.run(watchRegister);

  return store;
};


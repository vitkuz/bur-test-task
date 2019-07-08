import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import Routes from './components/routes/Routes';
import createStore from './store/createStore';

const store = createStore(window.INITIAL_STATE);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      { renderRoutes(Routes) }
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));


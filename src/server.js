import path from 'path';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './store/createStore';
import { renderRoutes, matchRoutes } from 'react-router-config';

import Routes from './components/routes/Routes';

const PORT = 3000; //todo: put to config later
const PUBLIC_FOLDER_PATH = path.join(__dirname, '..', 'public');
// console.debug(`DEBUG INFO: __dirname=${__dirname}, PUBLIC_FOLDER=${PUBLIC_FOLDER_PATH}`);

const app = express();

app.use(express.static(PUBLIC_FOLDER_PATH));
// app.use(express.static(PUBLIC_FOLDER_PATH, { maxAge: '30d' })); //todo: different setup for prod and development

const renderPage = (req, store, context) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        { renderRoutes(Routes) }
      </StaticRouter>
    </Provider>);

  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Demo app</title>
      </head>
      <body>
          <div id="root">${content}</div>
      </body>
      <script>
        window.INITIAL_STATE = ${JSON.stringify(store.getState())}; //todo: possible XSS, serialize output later
      </script>
      <script src="/dist/js/client.bundle.js"></script>
    </html>  
  `;
};

app.get('*', (req, res) => {
  const store = createStore({});
  const context = {};

  console.debug(matchRoutes(Routes, req.url));
  const promises = matchRoutes(Routes, req.url)
    .map(({ route, match }) => {
      return route.loadData ? route.loadData(store, match) : null
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve) => {
          // wrap all promises in a new promise to resolve no matter what
          promise.then(resolve).catch(resolve);
        })
      }
    });

  Promise
    .all(promises)
    .then(() => {
      const content = renderPage(req, store, context);
      // console.debug(context);

      if (context.url) {
        return res.redirect(301, context.url);
      }

      if (context.notFound) {
        res.status(404);
      }

      if (context.accessDenied) {
        res.status(403);
      }

      if (context.serverError) {
        res.status(500);
      }

      res.send(content);
    })

    // catch removed intentionally. processes always be resolved
    // .catch(e => {
    //   console.error('Error loading the page', e);
    //   res.status(500).send('Something went wrong');
    // })
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

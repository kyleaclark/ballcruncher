// Note: see https://github.com/facebook/react/issues/6451 for purpose of Object.assign polyfill
Object.assign = null;
Object.assign = require('object-assign');

import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';
import expressGraphQL from 'express-graphql';
import jwt from 'jsonwebtoken';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import UniversalRouter from 'universal-router';
import PrettyError from 'pretty-error';
import App from './components/app';
import Html from './components/html';
import schema from './data/schema';
import routes from './routes';
import assets from './assets.json'; // eslint-disable-line import/no-unresolved
import configureStore from './store/configureStore';
import { port, dbConnection } from './config';

import { getRankings } from './actions/index';
import rankingsApi from './api/rankings';
import fantasyFootballRankingsApi from './api/fantasy-football-rankings';

const app = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

mongoose.connect(dbConnection);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/api/rankings', rankingsApi);
app.use('/api/fantasy-football-rankings', fantasyFootballRankingsApi);

app.use('/graphql', expressGraphQL(req => ({
  schema,
  graphiql: __DEV__,
  rootValue: { request: req },
  pretty: __DEV__,
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const store = configureStore({}, {
      cookie: req.headers.cookie,
    });

    store.dispatch(getRankings());

    const css = new Set();

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Initialize a new Redux store
      // http://redux.js.org/docs/basics/UsageWithReact.html
      store,
    };

    const route = await UniversalRouter.resolve(routes, {
      ...context,
      path: req.path,
      query: req.query,
    });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
    const sheet = new ServerStyleSheet()
    // data.styles = sheet.getStyleTags() // or sheet.getStyleElement()
    data.children = ReactDOM.renderToString(sheet.collectStyles(<App context={context}>{route.component}</App>));
    data.styles = sheet.getStyleElement(); // or sheet.getStyleElement()
    // data.styles = [
    //   { id: 'css', cssText: [...css].join('') },
    // ];
    data.scripts = [
      assets.vendor.js,
      assets.client.js,
    ];
    data.state = context.store.getState();
    if (assets[route.chunk]) {
      data.scripts.push(assets[route.chunk].js);
    }

    // const html = ReactDOM.renderToString(sheet.collectStyles(<Html {...data} />));
    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[]} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<h3>Sorry, an unexpected error occurred.</h3>)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
/* eslint-enable no-console */

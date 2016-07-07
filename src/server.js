/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel-polyfill';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import React from 'react';
import { match } from 'universal-router';
import ReactDOM from 'react-dom/server';
import routes from './routes';
import Html from './components/html';
import { getRankings } from './actions/index';
import configureStore from './store/configureStore';

import rankingsApi from './api/rankings';

const server = global.server = express();
const port = process.env.PORT || 5000;
const dbConnection = process.env.MONGOLAB_URI || 'mongodb://localhost/ballcruncher_db';
server.set('port', port);
mongoose.connect(dbConnection);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public')));

//
// Register API middleware
// -----------------------------------------------------------------------------
//server.use('/api/content', require('./api/content'));
server.use('/api/rankings', rankingsApi);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  try {
    let css = [];
    let statusCode = 200;
    const template = require('./views/index.jade'); // eslint-disable-line global-require
    const data = { title: '', description: '', css: '', body: '' };

    if (process.env.NODE_ENV === 'production') {
      data.trackingId = analytics.google.trackingId;
    }

    const store = configureStore({}, {
      cookie: req.headers.cookie,
    });

    store.dispatch(getRankings());

    await match(routes, {
      path: req.path,
      query: req.query,
      context: {
        store,
        insertCss: styles => css.push(styles._getCss()), // eslint-disable-line no-underscore-dangle
        setTitle: value => (data.title = value),
        setMeta: (key, value) => (data[key] = value),
      },
      render(component, status = 200) {
        css = [];
        statusCode = status;
        data.state = JSON.stringify(store.getState());
        data.body = ReactDOM.renderToString(component);
        data.css = css.join('');
        return true;
      },
    });

    res.status(statusCode);
    res.send(template(data));
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`The server is running at http://localhost:${port}/`);
});

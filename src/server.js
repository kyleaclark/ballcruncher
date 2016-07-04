/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel-core/polyfill';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Router from './routes';
import Html from './components/html';

import rankingsApi from './api/rankings';

const server = global.server = express();
const port = process.env.PORT || 5000;
const dbConnection = 'mongodb://localhost/ballcruncher_db';
server.set('port', port);
mongoose.connect(dbConnection);

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public')));

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/content', require('./api/content'));
server.use('/api/rankings', rankingsApi);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '' };
    const css = [];
    const context = {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    await Router.dispatch({ path: req.path, context }, (state, component) => {
      data.body = ReactDOMServer.renderToString(component);
      data.css = css.join('');
    });

    const html = ReactDOMServer.renderToStaticMarkup(<Html {...data} />);
    res.status(statusCode).send('<!doctype html>\n' + html);
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

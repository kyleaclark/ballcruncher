/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/app';
import Page from './components/pages/page';
import ContentPage from './components/views/content';
import NotFoundPage from './components/views/not_found';
import ErrorPage from './components/views/error';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <App context={context}>{component}</App>
    );
  });

  on('/', async () => <Page route='Home' />);

  on('/nfl', async () => <Page route='Nfl' />);

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;

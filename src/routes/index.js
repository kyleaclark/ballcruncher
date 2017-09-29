/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./nfl').default,
    require('./fantasy-football').default,
    require('./nba').default,
    require('./nba-blog').default
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `Ball Cruncher - ${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },

};

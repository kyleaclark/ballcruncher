/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel-polyfill';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import Router from './routes';
import history from './core/history';
import { addEventListener, removeEventListener } from './utils/DOMUtils';
import configureStore from './store/configureStore';

let cssContainer = document.getElementById('css');
const appContainer = document.getElementById('app');
const context = {
  store: null,
  onSetTitle: value => document.title = value,
  onSetMeta: (name, content) => {
    // Remove and create a new <meta /> tag in order to make it work
    // with bookmarks in Safari
    const elements = document.getElementsByTagName('meta');
    [].slice.call(elements).forEach((element) => {
      if (element.getAttribute('name') === name) {
        element.parentNode.removeChild(element);
      }
    });
    const meta = document.createElement('meta');
    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    document.getElementsByTagName('head')[0].appendChild(meta);
  },
};

function render(state) {
  Router.dispatch(state, (newState, component) => {
    ReactDOM.render(component, appContainer, () => {
      // Restore the scroll position if it was saved into the state
      if (state.scrollY !== undefined) {
        window.scrollTo(state.scrollX, state.scrollY);
      } else {
        window.scrollTo(0, 0);
      }

      // Remove the pre-rendered CSS because it's no longer used
      // after the React app is launched
      if (cssContainer) {
        cssContainer.parentNode.removeChild(cssContainer);
        cssContainer = null;
      }
    });
  });
}

function run() {
  let currentLocation = null;
  let currentState = null;
  const store = {
    rankings: []
  };

  // Make taps on links and buttons work fast on mobiles
  FastClick.attach(document.body);

  context.store = configureStore(initialState, {});

  // Re-render the app when window.location changes
  const removeHistoryListener = history.listen(location => {
    currentLocation = location;
    match(routes, {
      path: location.pathname,
      query: location.query,
      state: location.state,
      context,
      render: render.bind(undefined, container, location.state),
    }).catch(err => console.error(err)); // eslint-disable-line no-console
  });

}

// Run the application when both DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}

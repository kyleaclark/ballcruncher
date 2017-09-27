import React from 'react';
import Layout from '../../components/layout';
import Home from './home';
import { getRankings } from '../../actions/index';

export default {

  path: '/',

  async action({ store }) {
    store.dispatch(getRankings(2017, 3));

    return {
      title: 'Home',
      component: <Layout><Home /></Layout>,
    };
  },

};

import React from 'react';
import Layout from '../../components/layout';
import Nfl from './nfl';
import { getRankings } from '../../actions/index';

export default {

  path: '/nfl',

  async action({ store }) {
    store.dispatch(getRankings(2017, 9));

    return {
      title: 'NFL',
      component: <Layout><Nfl /></Layout>,
    };
  },

};

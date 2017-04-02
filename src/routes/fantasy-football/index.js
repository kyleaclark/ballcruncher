import React from 'react';
import Layout from '../../components/layout';
import FantasyFootball from './fantasy-football';
import { getRankings } from '../../actions/fantasy-football-rankings';

export default {

  path: '/fantasy-football',

  async action({ store }) {
    store.dispatch(getRankings());

    return {
      title: 'Fantasy Football',
      component: <Layout><FantasyFootball /></Layout>,
    };
  },

};

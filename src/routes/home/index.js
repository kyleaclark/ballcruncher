import React from 'react'
import Home from './home'
import { getRankings } from '../../actions/index'

export default {

  path: '/',

  async action({ context }) {
    context.store.dispatch(getRankings(2016, 17))
    context.setTitle('Ballcruncher - Home')

    return <Home />;
  }

};

import React from 'react'
import Home from './home'
import { getRankings } from '../../actions/index'

export default {

  path: '/',

  async action({ context }) {
    context.store.dispatch(getRankings())
    context.setTitle('Ballcruncher - Home')

    return <Home />;
  }

};

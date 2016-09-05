import React from 'react'
import FantasyFootball from './fantasy-football'
import { getRankings } from '../../actions/fantasy-football-rankings'

export default {

  path: '/fantasy-football',

  async action({ context }) {
    context.store.dispatch(getRankings())
    context.setTitle('Ballcruncher - Fantasy Football')

    return <FantasyFootball />
  }

};

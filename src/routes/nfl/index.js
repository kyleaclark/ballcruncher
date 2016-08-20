import React from 'react'
import Nfl from './nfl'
import { getRankings } from '../../actions/index'

export default {

  path: '/nfl',

  async action({ context }) {
    context.store.dispatch(getRankings())
    context.setTitle('Ballcruncher - NFL')

    return <Nfl />
  }

};

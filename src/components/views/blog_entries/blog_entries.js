import React, { PropTypes, Component } from 'react';
import styles from './blog_entries.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class BlogEntries extends Component {

  render() {
    return (
      <div className="view__blog-entries">
        <span>&raquo; </span><a href='https://medium.com/@ballcruncher/nba-2015-2016-predictions-a1a21976d704'>NBA 2015-2016 Predictions</a>
        <p>(Published on Oct 27)</p>

        <span>&raquo; </span><a href='https://medium.com/@ballcruncher/nba-contender-tiers-39cb9262d0ef'>NBA Contender Tiers</a>
        <p>(Published on Oct 27)</p>

        <span>&raquo; </span><a href='https://medium.com/@ballcruncher/week-7-nfl-power-rankings-49c1e77e4d5f'>NFL Week 7 Power Rankings</a>
        <p>(Published on Oct 27)</p>

        <span>&raquo; </span><a href='https://medium.com/@ballcruncher/nfl-crunch-the-turnover-effect-75623cabbce5'>NFL Crunch:  Turnover Effect</a>
        <p>(Published on Oct 20)</p>
      </div>
    );
  }

}

export default BlogEntries;

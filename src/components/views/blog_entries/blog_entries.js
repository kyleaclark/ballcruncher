import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';

const BlogEntriesContainer = styled.div`
  a {
    font-size: 0.85em;
  }

  p {
    color: ${props => props.theme['gray-light']};
    font-size: 0.75em;
    margin-top: 0;
  }
`;

class BlogEntries extends Component {

  render() {
    return (
      <BlogEntriesContainer>
        <span>&raquo; </span><a href='https://medium.com/@ballcruncher/nba-2015-2016-predictions-a1a21976d704'>NBA 2015-2016 Predictions</a>
        <p>(Published on Oct 27)</p>

        <span>&raquo; </span><a href='https://medium.com/@ballcruncher/nba-contender-tiers-39cb9262d0ef'>NBA Contender Tiers</a>
        <p>(Published on Oct 27)</p>

        <span>&raquo; </span><a href='https://medium.com/@ballcruncher/week-7-nfl-power-rankings-49c1e77e4d5f'>NFL Week 7 Power Rankings</a>
        <p>(Published on Oct 27)</p>

        <span>&raquo; </span><a href='https://medium.com/@ballcruncher/nfl-crunch-the-turnover-effect-75623cabbce5'>NFL Crunch:  Turnover Effect</a>
        <p>(Published on Oct 20)</p>
      </BlogEntriesContainer>
    );
  }

}

export default BlogEntries;

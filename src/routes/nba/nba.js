import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Link from '../../components/link';

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 20px 2px;
  max-width: ${props => props.theme['max-content-width']};
`;

const BlogSubTitle = styled.h5`
  margin-top: 2px;
  margin-bottom: 0;
`;

const BlogDetails = styled.h5`
  font-size: 0.8em;
  font-weight: 300;
  margin-top: 0;
`;

const NbaSubContent = styled.div`
  border-top: 1px dashed #ddd;
  margin-top: 25px;
  padding-top: 10px;
`;


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

class NBA extends Component {
  render() {
    const { title } = this.props;

    return (
      <PageContainer>
        <h3>NBA Blog</h3>
        <p>Introducing the NBA content section at Ballcruncher.</p>

        <div>
          <Link navigationLink={true} to='/nba/blog/2017-09-28-the-gimmicked-70'>The Gimmicked 70</Link>
          <BlogSubTitle>The night Devin Booker went off for 70 and was labeled "gimmicked"</BlogSubTitle>
          <BlogDetails>Sep 28, 2017</BlogDetails>
        </div>

        <NbaSubContent>
          <Link external type='text' to='https://94feetreport.com/tj-warren-by-the-numbers-8363e540d9cc' target='_blank'>TJ Warren by the Numbers</Link>
          <BlogSubTitle>Examining the conundrum of a mid-range scorer</BlogSubTitle>
          <BlogDetails>
            Dec 4, 2017 - published on <Link external type='text' to='https://94feetreport.com/' target='_blank'>The 94 Feet Report</Link>
          </BlogDetails>
        </NbaSubContent>

        <NbaSubContent>
          <Link external type='text' to='https://94feetreport.com/evaluating-the-state-of-the-process-28e64456ebce' target='_blank'>Evaluating the State of the Process</Link>
          <BlogSubTitle>Revisiting the Hinkie years and looking into the 76ers future</BlogSubTitle>
          <BlogDetails>
            Nov 21, 2017 - published on <Link external type='text' to='https://94feetreport.com/' target='_blank'>The 94 Feet Report</Link>
          </BlogDetails>
        </NbaSubContent>

        <NbaSubContent>
          <Link external type='text' to='https://94feetreport.com/10-nba-stats-and-the-triple-double-f6f5f1b55740' target='_blank'>10 NBA Stats and the Triple-Double</Link>
          <BlogSubTitle>Early season observations from around the NBA</BlogSubTitle>
          <BlogDetails>
            Nov 13, 2017 - published on <Link external type='text' to='https://94feetreport.com/' target='_blank'>The 94 Feet Report</Link>
          </BlogDetails>
        </NbaSubContent>

        <NbaSubContent>
          <Link external type='text' to='https://94feetreport.com/nba-lies-damned-lies-and-statistics-f372f0e7adae' target='_blank'>NBA Lies, Damned Lies, and Statistics</Link>
          <BlogSubTitle>3 takeaways from the start of the season</BlogSubTitle>
          <BlogDetails>
            Nov 6, 2017 - published on <Link external type='text' to='https://94feetreport.com/' target='_blank'>The 94 Feet Report</Link>
          </BlogDetails>
        </NbaSubContent>

        <NbaSubContent>
          <Link external type='text' to='https://94feetreport.com/dissecting-the-suns-revival-from-the-dead-f498502b2fc0' target='_blank'>Dissecting the Suns Revival from the Dead</Link>
          <BlogSubTitle>An analysis of the dichotomy of two seasons</BlogSubTitle>
          <BlogDetails>
            Oct 31, 2017 - published on <Link external type='text' to='https://94feetreport.com/' target='_blank'>The 94 Feet Report</Link>
          </BlogDetails>
        </NbaSubContent>

        <NbaSubContent>
          <Link external type='text' to='https://94feetreport.com/a-reaction-to-the-earl-watson-firing-fd5fedd143f' target='_blank'>A Reaction to the Earl Watson Firing</Link>
          <BlogSubTitle>A deep dive on the Phoenix Suns and what comes next</BlogSubTitle>
          <BlogDetails>
            Oct 23, 2017 - published on <Link external type='text' to='https://94feetreport.com/' target='_blank'>The 94 Feet Report</Link>
          </BlogDetails>
        </NbaSubContent>

        <NbaSubContent>
          <Link external type='text' to='https://94feetreport.com/the-problem-with-championship-or-bust-ace210da5d89' target='_blank'>The Problem With “Championship or Bust”</Link>
          <BlogSubTitle>Breaking Down the NBA’s Rings Fallacy</BlogSubTitle>
          <BlogDetails>
            Oct 19, 2017 - published on <Link external type='text' to='https://94feetreport.com/' target='_blank'>The 94 Feet Report</Link>
          </BlogDetails>
        </NbaSubContent>

        <NbaSubContent>
          <Link external type='text' to='https://94feetreport.com/the-case-for-all-30-teams-preview-edition-part-ii-43cf40dfc094' target='_blank'>The Case for All 30 Teams: Preview Edition Part II</Link>
          <BlogSubTitle>Breaking Down the NBA’s Rings Fallacy</BlogSubTitle>
          <BlogDetails>
            Oct 11, 2017 - published on <Link external type='text' to='https://94feetreport.com/' target='_blank'>The 94 Feet Report</Link>
          </BlogDetails>
        </NbaSubContent>

        <NbaSubContent>
          <Link external type='text' to='https://94feetreport.com/playground-style-all-star-teams-and-hurt-feelings-2dd4f53ecaf1' target='_blank'>Playground-Style All-Star Teams and Hurt Feelings</Link>
          <BlogSubTitle>Analyzing the glorious rule change</BlogSubTitle>
          <BlogDetails>
            Oct 5, 2017 - published on <Link external type='text' to='https://94feetreport.com/' target='_blank'>The 94 Feet Report</Link>
          </BlogDetails>
        </NbaSubContent>

        <NbaSubContent>
          <Link external type='text' to='https://94feetreport.com/the-case-for-all-30-teams-preview-edition-part-i-8f7a51bc3003' target='_blank'>The Case for All 30 Teams: Preview Edition Part I</Link>
          <BlogSubTitle>Making the case for each team in the Association for the 2017–18 season</BlogSubTitle>
          <BlogDetails>
            Oct 4, 2017 - published on <Link external type='text' to='https://94feetreport.com/' target='_blank'>The 94 Feet Report</Link>
          </BlogDetails>
        </NbaSubContent>
      </PageContainer>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NBA)

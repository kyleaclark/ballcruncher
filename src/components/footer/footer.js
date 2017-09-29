import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import Link from '../link';

const FooterWrapper = styled.div`
  background: ${props => props.theme['gray-darker']};
  color: #fff;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 20px 15px;
  max-width: ${props => props.theme['max-content-width']};
  text-align: center;
`;

const FooterText = styled.span`
  color: rgba(255, 255, 255, .5);
  display: block;
`;

class Footer extends Component {

  render() {
    const year = new Date().getFullYear();

    return (
      <FooterWrapper>
        <FooterContainer>
          <FooterText>© Ballcruncher 2015-{year} &ndash; Sports Musings &amp; Analysis</FooterText>
          <Link external type='text' to='https://twitter.com/theballcruncher' target='_blank'>@theballcruncher</Link>
        </FooterContainer>
      </FooterWrapper>
    );
  }

}

export default Footer;

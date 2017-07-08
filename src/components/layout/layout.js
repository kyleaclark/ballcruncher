import React, { PropTypes } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import variables from '../variables';
import Header from '../header';
import Footer from '../footer';

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.div`
  flex: 1 1 auto;
  width: 100%;
`;

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <ThemeProvider theme={variables}>
        <Body>
          <Header />
          <Main>
            {this.props.children}
          </Main>
          <Footer />
        </Body>
      </ThemeProvider>
    );
  }
};

export default Layout;

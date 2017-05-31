import React, { PropTypes } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import s from './layout.css';
import variables from '../variables';
import Header from '../header';
import Feedback from '../feedback';
import Footer from '../footer';

// const LayoutContainer = styled.div`
//   font-family: ${props => props.theme['font-family-base']};
// `;

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <ThemeProvider theme={variables}>
        <div>
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
};

export default Layout;

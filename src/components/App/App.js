/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './app.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../header';
import Feedback from '../feedback';
import Footer from '../footer';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    return !this.props.error ? (
      <div>
        <Header />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;

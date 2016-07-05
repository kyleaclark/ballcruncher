/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './app.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../header';
import Feedback from '../feedback';
import Footer from '../footer';
import { Provider } from 'react-redux';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    if (this.props.error) {
      return this.props.children;
    }

    const store = this.props.context.store;
    return (
      <Provider store={store}>
        <div>
          <Header />
          {this.props.children}
          <Feedback />
          <Footer />
        </div>
      </Provider>
    );
  }

}

export default App;

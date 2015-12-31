/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './page.css';
import withStyles from '../../decorators/withStyles';

import Home from './home/home';
import Nfl from './nfl/nfl';

@withStyles(styles)
class Page extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  _renderPageRoute() {
    const page = {
      Home: () => { return <Home /> },
      Nfl: () => { return <Nfl /> }
    };

    return page[this.props.route]() || <Home />;
  }

  render() {
    const title = 'Ballcruncher -' + this.props.route;
    this.context.onSetTitle(title);

    return (
      <div className="page">
        <div className="page__container">

          {this._renderPageRoute()}

        </div>
      </div>
    );
  }

}

export default Page;

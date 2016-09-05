import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './feedback.css';

class Feedback extends Component {

  render() {
    return (
      <div className={s.feedback}>
        <div className={s.feedback__container}>
          <span>stat crunching &amp; sports musings</span>
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Feedback);

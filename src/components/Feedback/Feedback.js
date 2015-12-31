import React, { Component } from 'react';
import styles from './feedback.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Feedback extends Component {

  render() {
    return (
      <div className="feedback">
        <div className="feedback__container">
          <span>where ball don't lie about sports analytics &amp; musings</span>
        </div>
      </div>
    );
  }

}

export default Feedback;

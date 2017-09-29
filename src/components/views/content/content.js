import React, { PropTypes, Component } from 'react';

class ContentPage extends Component {

  render() {
    return (
      <div>
          {
            this.props.path === '/blog' ? <h1>Blog</h1> : <h1>{this.props.title}</h1>
          }
          <div dangerouslySetInnerHTML={{__html: this.props.content || ''}} />
      </div>
    );
  }

}

export default ContentPage;

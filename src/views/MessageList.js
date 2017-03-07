import React, { Component } from 'react';
import _ from 'lodash';

export class MessageList extends Component {
  render() {
    return React.createElement('ul', {}, 
      _.map(this.props.messages, (message => {
          return React.createElement('li', {}, message);
      }))
    )
  }
}

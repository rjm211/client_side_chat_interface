import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import _ from 'lodash';

export class MessageList extends Component {
  render() {
    return React.createElement(ListGroup, {}, 
      _.map(this.props.messages, (message => {
          return React.createElement(ListGroupItem, {}, message);
      }))
    )
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.string)
}
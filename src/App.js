import React, { Component } from 'react';
import { List } from 'immutable';

import { MessageList } from './views/MessageList';
import { InputBox } from './views/InputBox';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: new List()
    }
  }

  render() {
    return React.createElement(
      'div', {
        className: 'chat-client'
      },
      React.createElement(MessageList, {
        messages: this.state.messages.toArray()
      }),
      React.createElement(InputBox, {
        onSubmit: (value) => {
          this.setState({
            messages: this.state.messages.push(value)
          })
        },
        placeholder: 'Start typing to begin conversation'
      })
    )
  }
}

export default App;

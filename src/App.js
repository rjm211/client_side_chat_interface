import React, { Component } from 'react';
import { MessageList } from './views/MessageList';
import './App.css';


class App extends Component {
  render() {
    return React.createElement(MessageList, {
      messages: ['a', 'b']
    });
  }
}

export default App;

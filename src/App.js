import React, { Component } from 'react';
import { MessageList } from './views/MessageList';
import { InputBox } from './views/InputBox';
import './App.css';

class App extends Component {
  render() {
    return React.createElement('div', {} ,
      React.createElement(MessageList, {
        messages: ['a', 'b']
      }),
      React.createElement(InputBox, {
        onSubmit: value => {
          debugger;
        }
      })
    )
  }
}

export default App;

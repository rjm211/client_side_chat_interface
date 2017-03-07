import React, { Component } from 'react';
import { MessageList } from './views/MessageList';
import { InputBox } from './views/InputBox';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  render() {
    return React.createElement('div', {} ,
      React.createElement(MessageList, {
        messages: this.state.messages
      }),
      React.createElement(InputBox, {
        onSubmit: (value) => {
          this.state.messages.push(value)
          this.setState({
            messages: this.state.messages
          })
        }
      })
    )
  }
}

export default App;

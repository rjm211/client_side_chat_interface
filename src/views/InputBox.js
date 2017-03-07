import React, { Component } from 'react';
import _ from 'lodash';
import { Form, FormControl } from 'react-bootstrap';

export class InputBox extends Component {
  render() {
    return React.createElement(Form, {
      onSubmit: e => {
        this.props.onSubmit(this.ref.value);
          e.preventDefault();
        }
      },
      React.createElement(FormControl, {
        componentClass: 'input',
        inputRef: ref => { this.ref = ref },
        placeholder: this.props.placeholder
      })
    );
  }
}

InputBox.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string.isRequired
}
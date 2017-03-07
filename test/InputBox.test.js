import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Sinon from 'sinon';
import Should from 'should';

import { InputBox } from '../src/views/InputBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      React.createElement(InputBox, {
          onSubmit: () => {},
          placeholder: ''
      }), div);
});

it('calls props.onSubmit when enter is pressed', () => {
  const div = document.createElement('div');
  const submitSpy = Sinon.spy();
  const component = ReactDOM.render(
      React.createElement(InputBox, {
          onSubmit: submitSpy,
          placeholder: ''
      }), div);

  const form = ReactDOM.findDOMNode(component);
  const inputBox = ReactDOM.findDOMNode(component.ref);
  
  inputBox.value = 'foo';
  ReactTestUtils.Simulate.change(inputBox);
  ReactTestUtils.Simulate.submit(form);

  submitSpy.calledWith('foo').should.equal(true);
  inputBox.value.should.equal('');
});

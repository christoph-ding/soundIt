/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// libraries
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// AWS Specific
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import {awsmobile} from './aws-exports';

Amplify.configure(awsmobile);

// my modules
import rootReducer from './client/reducers'
import Application from './client/entireApplication';

export default class App extends Component<Props> {
  render() {
    return (
      <Application />
    );
  }
}

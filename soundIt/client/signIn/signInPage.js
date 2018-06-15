import React, { Component } from 'react';
import { Text } from 'react-native';

// Components for SignIn Page
import SignInBody from './signInBody';

class SignInPage extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <SignInBody navigateAction={this.props.navigation.navigate}/>
    )
  } 
}

export default SignInPage;

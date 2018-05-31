import React, { Component } from 'react';
import {
  Text
} from 'react-native';

// Components for SignUp Page
import SignUpHeader from './signUpHeader';
import SignUpBody from './signUpBody';

class SignUpPage extends Component {
  render() {
    console.log('============= signup page ==============')
    console.log(this.props)
    return (
      <SignUpBody navigateAction={this.props.navigation.navigate}/>
    )
  } 
}

export default SignUpPage;

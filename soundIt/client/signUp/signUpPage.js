import React, { Component } from 'react';

// Components for SignUp Page
import SignUpBody from './signUpBody';

class SignUpPage extends Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <SignUpBody navigateAction={this.props.navigation.navigate}/>
    )
  } 
}

export default SignUpPage;

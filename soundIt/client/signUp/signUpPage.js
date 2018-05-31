import React, { Component } from 'react';

// Components for SignUp Page
import SignUpHeader from './signUpHeader';
import SignUpBody from './signUpBody';

class SignUpPage extends Component {
  render() {
    return (
      <SignUpBody navigateAction={this.props.navigation.navigate}/>
    )
  } 
}

export default SignUpPage;

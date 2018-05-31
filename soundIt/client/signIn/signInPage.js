import React, { Component } from 'react';

// Components for SignIn Page
import SignInBody from './signInBody';

class SignInPage extends Component {
  render() {
    return (
      <SignInBody navigateAction={this.props.navigation.navigate}/>
    )
  } 
}

export default SignInPage;

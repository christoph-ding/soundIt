import React, { Component } from 'react';

// Components for SignIn Page
import SignInBody from './signInBody';

class SignInPage extends Component {
  static navigationOptions = {
        header: { visible:false }
  }

  render() {
    return (
      <SignInBody navigateAction={this.props.navigation.navigate}/>
    )
  } 
}

export default SignInPage;

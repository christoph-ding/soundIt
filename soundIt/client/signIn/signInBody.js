import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';

import STYLES from './signIn-styles';
import SignInForm from './signInForm';

class SignInBody extends Component {
  
  goToApplication = () => {
    console.log("going ... ")
    this.props.navigateAction('Groups')
  }

  goToSignUp = () => {
    this.props.navigateAction('SignUp')
  }

  render() {
    return (
      <View style={STYLES.body}>
        <SignInForm 
          navigateAction={this.goToApplication}/>
        <Button
            onPress={this.goToSignUp}
            title='Sign Up'
        />
      </View>
    )    
  }
}

export default SignInBody

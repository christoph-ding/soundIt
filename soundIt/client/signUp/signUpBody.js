import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

import SignUpWelcome from './signUpWelcome';
import SignUpForm from './signUpForm';

class SignUpBody extends Component {

  goToSignIn = () => {
    this.props.navigateAction('SignIn')
  }

  render() {
    return (
      <View style={MAIN_STYLE.container}>
        <SignUpWelcome style={WELCOME_STYLE}/>
        <SignUpForm 
          style={FORM_STYLE}
          navigateAction={this.goToSignIn}/>
        <Button
          onPress={this.goToSignIn}
          title='sign in'
          color='green'
        />
      </View>
    )
  }
}

export default SignUpBody

// Styles
const MAIN_STYLE = StyleSheet.create({
  container: {
    flex: 1,  
    width: '100%'    
  }
});

const WELCOME_STYLE = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    padding: 10,
    // testing
    backgroundColor: 'powderblue'
  }
});

const FORM_STYLE = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // testing
    backgroundColor: 'skyblue'
  }
});  

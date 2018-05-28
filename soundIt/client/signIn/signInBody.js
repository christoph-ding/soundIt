import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import SignInForm from './signInForm';

class SignInBody extends Component {

  goToApplication = () => {
    this.props.navigateAction('Groups')
  }

  render() {
    return (
      <View style={MAIN_STYLE.container}>
        <SignInForm 
          navigateAction={this.goToApplication}
          style={FORM_STYLE}       
        />
      </View>
    )
  }
}

export default SignInBody

// Styles

const MAIN_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'powderblue'
  }
});

const FORM_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

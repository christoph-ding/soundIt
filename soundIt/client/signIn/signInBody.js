import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import STYLES from './signIn-styles';
import SignInForm from './signInForm';

class SignInBody extends Component {
  
  goToApplication = () => {
    this.props.navigateAction('Groups')
  }

  render() {
    return (
      <View style={STYLES.body}>
        <SignInForm 
          navigateAction={this.goToApplication}/>
      </View>
    )
  }
}

export default SignInBody

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import STYLES from './signUp-styles';

class SignUpWelcome extends Component {
  render() {    
    return (
      <View style={STYLES.welcome}>
        <Text> Welcome! </Text>
        <Text> Create an account or sign in </Text>
      </View>
    )
  }
}

export default SignUpWelcome

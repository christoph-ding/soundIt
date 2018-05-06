import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import SignUpWelcome from './signUpWelcome';

class SignUpBody extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUpWelcome />
      </View>
    )
  }
}

export default SignUpBody

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'blue',
  }
});

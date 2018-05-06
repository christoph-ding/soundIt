import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import SignInForm from './signInForm';

class SignInBody extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignInForm />
      </View>
    )
  }
}

export default SignInBody

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'blue',
  }
});

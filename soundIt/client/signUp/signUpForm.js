import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

class SignUpForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Phone Number </Text>
        <Text> Password </Text>
      </View>
    )
  }
}

export default SignUpForm

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'blue',
  }
});

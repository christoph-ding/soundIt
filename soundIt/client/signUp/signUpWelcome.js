import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class SignUpWelcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome! </Text>
        <Text> Create an account or sign in </Text>
      </View>
    )
  }
}

export default SignUpWelcome

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  },
  item: {
    fontSize: 13,
    textAlign: 'center'
  }
});

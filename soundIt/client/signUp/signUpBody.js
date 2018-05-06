import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

class SignUpBody extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Sign Up </Text>
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

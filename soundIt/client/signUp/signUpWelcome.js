import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class SignUpWelcome extends Component {
  render() {
    const style = this.props.style
    return (
      <View style={style.container}>
        <Text> Welcome! </Text>
        <Text> Create an account or sign in </Text>
      </View>
    )
  }
}

export default SignUpWelcome

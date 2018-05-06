import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

import SignUpWelcome from './signUpWelcome';
import SignUpForm from './signUpForm';

class SignUpBody extends Component {

  handleClick = () => {
    this.props.navigateAction('SignIn')
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpWelcome />
        <SignUpForm />
        <Button
          onPress={this.handleClick}
          title='sign in'
          color='green'
        />
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

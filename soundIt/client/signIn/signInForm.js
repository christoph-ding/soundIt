import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { FormLabel, 
         FormInput, 
         FormValidationMessage 
} from 'react-native-elements';
import { Auth } from 'aws-amplify';


class SignInForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      errorMessage: '',
    }
  }

  handleChange = (key, value) => {
    const newState = {}
    newState[key] = value
    this.setState(newState, () => console.log(this.state))
  }

  handleSignIn = () => {
    const { username, password } = this.state;

    // auth sign in

  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Phone Number </Text>
        <Text> Password </Text>
      </View>
    )
  }
}

export default SignInForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import { FormLabel, 
         FormInput, 
         FormValidationMessage 
} from 'react-native-elements';
import { Auth } from 'aws-amplify';

import STYLES from './signIn-styles';

class SignInForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      phoneNumber: '',
      password: '',
      errorMessage: '',
    }

    this.handleSignIn = this.handleSignIn.bind(this)
  }

  handleInputChange = (key, value) => {
    const newState = {}
    newState[key] = value
    this.setState(newState)
  }

  successfulSignIn = () => {
    this.props.navigateAction()
  }

  async handleSignIn() {
    const { password, phoneNumber  } = this.state;

    console.log(this.state)
    
    let username = '+' + phoneNumber

    await Auth.signIn(username, password)
    .then(data => {
      console.log(data)
      this.successfulSignIn()
    })
    .catch(err => {
      console.log(err);
      this.setState({ errorMessage: err.message });
    })
  }

  render() {
    return (
      <View style={STYLES.form}>
        <FormLabel>Phone Number</FormLabel>
        <FormInput
          onChangeText={this.handleInputChange.bind(null, "phoneNumber")}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={this.handleInputChange.bind(null, "password")}
        />
        <Button
         title="Sign In"
         onPress={this.handleSignIn}
        /> 
      </View>
    )
  }
}

export default SignInForm

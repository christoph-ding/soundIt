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

import STYLES from './signUp-styles';

class SignUpForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      phoneNumber: '',
      errorMessage: '',
    }

    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleInputChange = (key, value) => {
    const newState = {}
    newState[key] = value
    this.setState(newState)
  }

  successfulSignUp = () => {
    this.props.navigateAction()
  }

  async handleSignUp() {
    const { password, phoneNumber } = this.state;

    await Auth.signUp(password, phoneNumber)
      .then(data => {
        this.successfulSignUp()
      })
      .catch(err => {
        console.log(err);
        this.setState({ errorMessage: err.message });        
      });
  }

  render() {
    return (
      <View style={STYLES.form}>
        <FormLabel>Phone Number</FormLabel>
        <FormInput
          placeholder="Sign Up Using Your Phone Number"
          onChangeText={this.handleInputChange.bind(null, "phoneNumber")}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={this.handleInputChange.bind(null, "password")}
        />
        <Button
          title="Sign Up"
          onPress={this.handleSignUp}
        /> 
      </View>
    )
  }
}

export default SignUpForm

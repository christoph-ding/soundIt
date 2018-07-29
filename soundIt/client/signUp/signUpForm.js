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
import Amplify, { API, Auth } from 'aws-amplify';

import STYLES from './signUp-styles';

class SignUpForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      phoneNumber: '',
      userName: '',
      password: '',
      errorMessage: '',
    }

    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleInputChange = (key, value) => {
    const newState = {}
    newState[key] = value
    this.setState(newState)
  }

  async handleSignUp() {
    console.log('signing up ...')

    let { phoneNumber, userName, password } = this.state;
    const apiName = 'Groups-Users'
    const path = '/users/'

    await Auth.signUp({
      // phone number is E.164 +01234567890
      username: '+' + phoneNumber,
      password: password
    })
    .then((data) => {
      console.log('creating a new user in DYNAMO DB...')
      return new Promise(function(resolve, reject) {
        let newUser = {
          body: {
            display: userName,
            userID: data.user.username
        }}
        API.post(apiName, path, newUser)
        .then(response => {
          console.log('success:')
          console.log(response)
          resolve()
        });
      })
    })
    .then(() => {
      this.props.navigateAction()
    })
    .catch(err => {
      console.log('error:')
      console.log(err)
    });
  }

  render() {
    return (
      <View style={STYLES.form}>
        <FormLabel>Phone Number</FormLabel>
        <FormInput
          placeholder="01234567890"
          onChangeText={this.handleInputChange.bind(null, "phoneNumber")}
        />
        <FormLabel>Display Name</FormLabel>
        <FormInput
          placeholder="Name"
          onChangeText={this.handleInputChange.bind(null, "userName")}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          placeholder="At least 6 characters"
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

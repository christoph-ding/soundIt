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
    const { email, password, phoneNumber } = this.state;

    await Auth.signUp(email, password, phoneNumber)
      .then(data => {
        this.successfulSignUp()
      })
      .catch(err => {
        console.log(err);
        this.setState({ errorMessage: err.message });        
      });
  }

  render() {
    const style = this.props.style
    return (
      <View style={style.container}>
        <FormLabel>First and Last Name</FormLabel>
        <FormInput
          placeholder="Sign Up Using Email"
          onChangeText={this.handleInputChange.bind(null, "email")}
        />
        <FormLabel>Phone Number</FormLabel>
        <FormInput
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

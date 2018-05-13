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
      username: '',
      password: '',
      phoneNumber: '',
      errorMessage: '',
    }
  }

  handleChange = (key, value) => {
    const newState = {}
    newState[key] = value
    this.setState(newState, () => console.log(this.state))
  }

  handleSignUp = () => {
    const { username, password, phoneNumber } = this.state;

    Auth.signUp(username, password, phoneNumber)
      .then(data => {
        userConfirmed = data.userConfirmed;

        this.setState({ showMFAPrompt: !userConfirmed });

        if (userConfirmed) {
          this.onSignUp();
        }
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>First and Last Name</FormLabel>
        <FormInput
          placeholder="Enter your Username"
          onChangeText={this.handleChange.bind(null, "username")}
        />
        <FormLabel>Phone Number</FormLabel>
        <FormInput
          onChangeText={this.handleChange.bind(null, "phoneNumber")}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={this.handleChange.bind(null, "password")}
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

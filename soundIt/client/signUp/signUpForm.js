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
  }

  handleChange = (key, value) => {
    const newState = {}
    newState[key] = value
    this.setState(newState)
  }

  handleSignUp = () => {
    const { email, password, phoneNumber } = this.state;
    console.log(Auth)

    Auth.signUp(email, password, phoneNumber)
      .then(data => {
        console.log('signing up ... ')
        console.log(data)

        // userConfirmed = data.userConfirmed;

        // this.setState({ showMFAPrompt: !userConfirmed });

        // if (userConfirmed) {
        //   this.onSignUp();
        // }
      })
      .catch(err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
        return;
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>First and Last Name</FormLabel>
        <FormInput
          placeholder="Sign Up Using Email"
          onChangeText={this.handleChange.bind(null, "email")}
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

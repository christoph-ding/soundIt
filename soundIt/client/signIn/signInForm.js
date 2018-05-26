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


class SignInForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    }

    this.handleSignIn = this.handleSignIn.bind(this)
  }

  handleChange = (key, value) => {
    const newState = {}
    newState[key] = value
    this.setState(newState)
  }

  async handleSignIn() {
    const { email, password } = this.state;

    console.log('email: ', email)
    console.log('password: ', password)

    await Auth.signIn(email, password)
      .then(data => {
        console.log('signing in ... ')
        console.log(data) 
      })
      .catch(err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      })

  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Email</FormLabel>
        <FormInput
          onChangeText={this.handleChange.bind(null, "email")}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={this.handleChange.bind(null, "password")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

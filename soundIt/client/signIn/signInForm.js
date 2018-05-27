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

  handleInputChange = (key, value) => {
    const newState = {}
    newState[key] = value
    this.setState(newState)
  }

  successfulSignIn = () => {
    this.props.navigateAction()
  }

  async handleSignIn() {
    const { email, password } = this.state;

    await Auth.signIn(email, password)
      .then(data => {
        this.successfulSignIn()
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
          onChangeText={this.handleInputChange.bind(null, "email")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

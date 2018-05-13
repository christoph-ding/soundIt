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

class SignUpForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      phoneNumber: '',
      errorMessage: '',
    };
  }

  handleChange = (key, value) => {
    console.log('key: ', key, ' value: ', value)
    const newState = {}
    newState[key] = value
    this.setState(newState, () => console.log(this.state))
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

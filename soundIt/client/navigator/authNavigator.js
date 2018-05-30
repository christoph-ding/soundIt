import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class SignUpPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
    }
  }

  render() {
    return (
      <Text> Hey </Text> 
    )
  } 
}


// Navigation
const LANDING = 'SignUp'

const AuthStack = StackNavigator(
  {
    SignUp: SignUpPage
  },
  {
    initialRouteName: LANDING
  }
)

class AuthNavigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('=====================')
    console.log(this.props)
    return (
      <View style={styles.container}>
        <AuthStack props={this.props}/>
      </View>
    )
  }
}

export default AuthNavigation

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

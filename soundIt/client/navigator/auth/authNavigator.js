import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View } from 'react-native';


import STYLES from '../navigator-styles'
import SignUpPage from '../../signUp/signUpPage';
import SignInPage from '../../signIn/signInPage';

// Navigation
const LANDING = 'SignUp'

const AuthStack = StackNavigator(
  {
    SignUp: {
      screen: SignUpPage
    },
    SignIn: {
      screen: SignInPage
    }
  },
  {
    initialRouteName: LANDING
  },
  {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)

class AuthNavigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={STYLES.navigatorContainer}>
        <AuthStack screenProps={this.props.screenProps}/>
      </View>
    )
  }
}

export default AuthNavigation

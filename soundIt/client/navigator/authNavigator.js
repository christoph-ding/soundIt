import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import SignUpPage from '../signUp/signUpPage';
import SignInPage from '../signIn/signInPage';

// Navigation
const LANDING = 'SignUp'

// test
// class TestSignUp extends Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerTitle: <Text> Hey </Text>
//     }
//   }

//   render() {
//     return (
//       <Text> Hey </Text>
//     )
//   } 
// }


const AuthStack = StackNavigator(
  {
    SignUp: {
      screen: (props) => {
        console.log('============= auth stack ==============')
        console.log(props)
        return (
          <SignUpPage {...props}/>
        )
      }
    },
    // SignUp: TestSignUp,
    SignIn: {
      screen: (props) => {
        console.log('============= auth stack ==============')
        console.log(props)
        return (
          <SignInPage {...props}/>
        )
      }
    }
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
    return (
      <View style={styles.container}>
        <AuthStack screenProps={this.props.screenProps}/>
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

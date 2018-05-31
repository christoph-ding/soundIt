import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

// Components for SignUp Page
// import SignUpHeader from '../signUp/signUpHeader';
// import SignUpBody from '../signUp/signUpBody';

// class SignUpPage extends Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerTitle: <SignUpHeader/>
//     }
//   }

//   render() {
//     return (
//       <SignUpBody navigateAction={this.props.navigation.navigate}/>
//     )
//   } 
// }

import SignUpPage from '../signUp/signUpPage';

// Navigation
const LANDING = 'SignUp'

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

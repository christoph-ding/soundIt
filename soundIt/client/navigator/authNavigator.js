import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class SignUpPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log('======================')
    // console.log(this.props)
    return (
      <Text> Hey </Text> 
    )
  } 
}


// Navigation
const LANDING = 'SignUp'

const AuthStack = StackNavigator(
  {
    SignUp: {
      screen: (props) => {
        console.log('============= auth stack ==============')
        console.log(props)
        return (
          <SignUpPage/>
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

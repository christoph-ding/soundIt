import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// navigation
const LANDING = 'Features'
// const LANDING = 'Auth'

import AuthNavigation from './navigator/auth/authNavigator';
import AuthHeader from './navigator/auth/authHeader';

class Authentication extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: AuthHeader
    }
  }

  render() {
    return (
      <AuthNavigation {...this.props}/>
    )
  } 
}

import FeaturesNavigation from './navigator/features/featuresNavigator'
import FeaturesHeader from './navigator/features/featuresHeader'

class Features extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: FeaturesHeader
    }
  }

  render() {
    return (
      <FeaturesNavigation {...this.props}/>
    )
  }
}

const RootStack = StackNavigator(
  {
    Auth: Authentication,
    Features: Features
  },
  {
    initialRouteName: LANDING
  },
)

class Application extends Component {  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <RootStack screenProps={this.props}/>
    )
  }
}

export default Application
// 

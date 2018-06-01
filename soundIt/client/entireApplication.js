import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// Components for Groups Page
// import GroupsBody from './groups/groupsBody';
// import GroupsHeader from './groups/groupsHeader';
// import NavigateToMakeNewGroup from './users/navigateToMakeNewGroup';

// const testGroups = [{title: 'Thing One'}, 
//                     {title: 'Thing Two'}, 
//                     {title: 'Thing Three'}]

// class GroupsPage extends Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerTitle: <GroupsHeader/>,
//       headerLeft: <NavigateToMakeNewGroup navigateAction={navigation.navigate}/>
//     }
//   }

//   render() {
//     return (
//       <GroupsBody data={testGroups}/>
//     )
//   }
// }

// // Components for Users Page
// import UsersHeader from './users/usersHeader';
// import UsersBody from './users/usersBody';
// import NavigateToGroups from './groups/navigateToGroups/'

// const testFriends = ['Friend One', 
//                      'Friend Two', 
//                      'Friend Three']

// class UsersPage extends Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       headerTitle: <UsersHeader/>,
//       headerLeft: <NavigateToGroups navigateAction={navigation.navigate}/>
//     }
//   }

//   render() {
//     return (
//       <UsersBody data={testFriends}/>
//     )
//   } 
// }

// navigation
// const LANDING = 'Auth'
const LANDING = 'Features'

import AuthNavigation from './navigator/authNavigator';
import AuthHeader from './navigator/authHeader';

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

// import FeaturesNavigation from './navigator/featuresNavigator'
import FeaturesHeader from './navigator/featuresHeader'

class Features extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: FeaturesHeader
    }
  }

  render() {
    return (
      <Text> Hey </Text>
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

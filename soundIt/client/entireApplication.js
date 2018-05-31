import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// Components for Groups Page
import GroupsBody from './groups/groupsBody';
import GroupsHeader from './groups/groupsHeader';
import NavigateToMakeNewGroup from './users/navigateToMakeNewGroup';

const testGroups = [{title: 'Thing One'}, 
                    {title: 'Thing Two'}, 
                    {title: 'Thing Three'}]

class GroupsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <GroupsHeader/>,
      headerLeft: <NavigateToMakeNewGroup navigateAction={navigation.navigate}/>
    }
  }

  render() {
    return (
      <GroupsBody data={testGroups}/>
    )
  }
}

// Components for Users Page
import UsersHeader from './users/usersHeader';
import UsersBody from './users/usersBody';
import NavigateToGroups from './groups/navigateToGroups/'

const testFriends = ['Friend One', 
                     'Friend Two', 
                     'Friend Three']

class UsersPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <UsersHeader/>,
      headerLeft: <NavigateToGroups navigateAction={navigation.navigate}/>
    }
  }

  render() {
    return (
      <UsersBody data={testFriends}/>
    )
  } 
}

// Components for SignUp Page
import SignUpHeader from './signUp/signUpHeader';
import SignUpBody from './signUp/signUpBody';

class SignUpPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <SignUpHeader/>
    }
  }

  render() {
    return (
      <SignUpBody navigateAction={this.props.navigation.navigate}/>
    )
  } 
}

// Components for SignIn Page
import SignInHeader from './signIn/signInHeader';
import SignInBody from './signIn/signInBody';

class SignInPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <SignInHeader/>
    }
  }

  render() {
    return (
      <SignInBody navigateAction={this.props.navigation.navigate}/>
    )
  } 
}

// navigation


// const RootStackOrig = StackNavigator(
//   {
//     Groups: {
//       screen: GroupsPage
//     },
//     Users: {
//       screen: UsersPage
//     },
//     SignUp: {
//       screen: SignUpPage
//     },
//     SignIn: {
//       screen: SignInPage
//     }
//   },
//   {
//     initialRouteName: LANDING
//   }
// )

const LANDING = 'Auth'

import AuthNavigation from './navigator/authNavigator';

const RootStack = StackNavigator(
  {
    Auth: {
      screen: (props) => {
        return (
          <AuthNavigation {...props}/>
        )
      }
    }
  },
  {
    initialRouteName: LANDING
  }
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

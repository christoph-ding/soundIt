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
      <UsersBody data={testGroups}/>
    )
  } 
}

const LANDING = 'Groups'

const RootStack = StackNavigator(
  {
    Groups: {
      screen: GroupsPage
    },
    Users: {
      screen: UsersPage
    }
  },
  {
    initialRouteName: LANDING
  }
)

class Application extends Component {
  render() {
    return (
      <RootStack />
    )
  }
}

export default Application

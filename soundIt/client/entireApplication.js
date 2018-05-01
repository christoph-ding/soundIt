import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// Components for Groups Page
import GroupsBody from './groups/groupsBody';
import GroupsHeader from './groups/groupsHeader';
import NavigateToMakeNewGroup from './users/navigateToMakeNewGroup';

class GroupsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <GroupsHeader/>,
      headerLeft: <NavigateToMakeNewGroup navigateAction={navigation.navigate}/>
    }
  }

  render() {
    return (
      <GroupsBody />
    )
  }
}

// Components for Users Page
import UsersHeader from './users/usersHeader';

class UsersPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <UsersHeader/>,
      headerLeft: <NavigateToMakeNewGroup navigateAction={navigation.navigate}/>
    }
  }

  render() {
    return (
      <GroupsBody />
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

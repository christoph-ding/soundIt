import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// Navigate to Sub Pages
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

class UsersPage extends Component {
  render() {
    return (
      <Text> Hey </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  }
});

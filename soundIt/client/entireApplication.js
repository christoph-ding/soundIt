import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// Navigate to Sub Pages
import GroupsPage from './groups/groupsPage';

const LANDING = 'Groups'

const RootStack = StackNavigator(
  {
    Groups: {
      screen: GroupsPage
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

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Threads from './threads/threads';
import Friends from './friends/friends';
import Groups from './groups/groups';
import Conversation from './conversation/conversation';

class ThreadsPage extends Component {
  render() {
    return (
      <Threads />
    )
  }
}

class FriendsPage extends Component {
  render() {
    return (
      <Friends />
    )
  }
}

class GroupsPage extends Component {
  render() {
    return (
      <Groups />
    )
  }
}

class SingleConversation extends Component {
  render() {
    return (
      <Conversation />
    )
  }
}

const LANDING = ThreadsPage

const RootStack = StackNavigator({
  Home: {
    screen: LANDING
  }, 
  Friends: {
    screen: FriendsPage
  },
  Groups: {
    screen: GroupsPage
  },
  Conversation: {
    screen: SingleConversation
  } 
})

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

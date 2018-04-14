import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Threads from './threads/threads';
import ThreadHeader from './threads/threadHeader';

import Friends from './friends/friends';
import Groups from './groups/groups';
import Conversation from './conversation/conversation';

// buttons

class ThreadsPage extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    // return {
    //   title: <ThreadHeader navigate={ params.navigate }/>
    // }
    return {
      headerTitle: <ThreadHeader navigate={'test'}/>,
      headerRight: <Button title='friends' onPress={() => navigation.navigate('Friends')}/>
    }
  }

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

const LANDING = 'Home'

const RootStack = StackNavigator(
  {
    Home: {
      screen: ThreadsPage
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

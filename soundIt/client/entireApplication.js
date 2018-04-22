import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// stuff related to threads -> factor into component
import Threads from './threads/threads';
import ThreadHeader from './threads/threadHeader';
import NavigateToThreads from './threads/navigateToThreads';

// stuff related to friends -> factor into component
import Friends from './friends/friends';
import FriendsHeader from './friends/friendsHeader';
import NavigateToFriends from './friends/navigateToFriends';

// stuff related to groups -> factor into component
import Groups from './groups/groups';
import GroupsHeader from './groups/groupsHeader';
import NavigateToGroups from './groups/navigateToGroups';

import Conversation from './conversation/conversation';
import ConversationHeader from './conversation/conversationHeader';

class ThreadsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    // const { params } = navigation.state;

    return {
      headerTitle: <ThreadHeader/>,
      headerLeft: <NavigateToFriends navigateAction={navigation.navigate}/>,
      headerRight: <NavigateToGroups navigateAction={navigation.navigate}/>
    }
  }
  render() {
    return (
      <Threads navigateAction={this.props.navigation.navigate}/>
    )
  }
}

class FriendsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    // const { params } = navigation.state;

    return {
      headerTitle: <FriendsHeader/>,
      headerLeft: <NavigateToThreads navigateAction={navigation.navigate}/>,
      headerRight: <NavigateToGroups navigateAction={navigation.navigate}/>
    }
  }

  render() {
    return (
      <Friends />
    )
  }
}

class GroupsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    // const { params } = navigation.state;

    return {
      headerTitle: <GroupsHeader/>,
      headerLeft: <NavigateToFriends navigateAction={navigation.navigate}/>,
      headerRight: <NavigateToThreads navigateAction={navigation.navigate}/>
    }
  }

  render() {
    return (
      <Groups />
    )
  }
}

class SingleConversation extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;    
    console.log(navigation)
    console.log(params)
    return {
      headerTitle: <ConversationHeader title={params.title}/>,
    }
  }

  render() {
    return (
      <Conversation />
    )
  }
}

const LANDING = 'Threads'

const RootStack = StackNavigator(
  {
    Threads: {
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

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// Sign Up
import SignUpHeader from './signUp/signUpHeader';
import SignUpBody from './signUp/signUpBody';

class SignUp extends Component {
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

// Sign In
import SignInHeader from './signIn/signInHeader';
import SignInBody from './signIn/signInBody';

class SignIn extends Component {
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

// New Groups
import NewGroupPage from './new-group/new-group-page.js'
// make ->
import NewGroupsHeader from './new-group/new-group-header.js';
import NavigateToMakeNewGroup from './users/navigate-new-group.js';

class NewGroup extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <GroupsHeader/>,
      headerLeft: <NavigateToMakeNewGroup navigateAction={navigation.navigate}/>
    }
  }

  // how to pass in data?
  render() {
    return (
      <NewGroupPage/>
    )
  }
}

// Conversations
import ConversationsPage from './conversations/conversations-page.js'
// make -> 
import ConversationsHeader from './conversations/conversations-header.js';
import NavigateToConversations from './conversations/navigate-conversations.js';

class Conversations extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <ConversationsHeader/>,
      headerLeft: <NavigateToConversations navigateAction={navigation.navigate}/>
    }
  }

  // how to pass in data?
  render() {
    return (
      <ConversationsPage/>
    )
  }
}

// Single Conversation
import SingleConversationPage from './single-conversation/single-conversation-page.js'
// make -> 
import SingleConversationHeader from './single-conversations/conversations-header.js'
import NavigateToSingleConversations from './single-conversations/navigate-single-conversations.js'

class SingleConversation extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <SingleConversationHeader/>,
      headerLeft: <NavigateToSingleConversations navigateAction={navigation.navigate}/>
    }
  }

  // how to pass in data?
  render() {
    return (
      <SingleConversationPage/>
    )
  }
}

// navigation
const LANDING = 'newGroup'

const RootStack = StackNavigator(
  {
    'newGroup': {
      screen: NewGroup
    },
    // 'conversations': {
    //   screen: Conversations
    // },
    // 'single-conversation': {
    //   screen: SingleConversation
    // }
    // 'signUp': {
    //   screen: SignUp
    // },
    // 'signIn': {
    //   screen: SignIn
    // }
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
  // original
  // render() {    
  //   return (
  //     <RootStack />
  //   )
  // }

export default Application 

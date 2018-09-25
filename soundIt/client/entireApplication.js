import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// navigation
const LANDING = 'Features'
// const LANDING = 'Auth'

import AuthNavigation from './navigator/auth/authNavigator';
import AuthHeader from './navigator/auth/authHeader';

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

import FeaturesNavigation from './navigator/features/featuresNavigator'
import FeaturesHeader from './navigator/features/featuresHeader'

class Features extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: FeaturesHeader
    }
  }

  render() {
    return (
      <FeaturesNavigation {...this.props}/>
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



// New Groups
import NewGroupPage from './new-group/new-group-page.js'
// make ->
import NewGroupsHeader from './new-group/new-group0header.js';
import NavigateToMakeNewGroup from './users/navigateToMakeNewGroup';




class NewGroupPage extends Component {
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

import ConversationsPage from './conversations/conversations-page.js'
import SingleConversationPage from './single-conversation/single-conversation-page.js'

// navigation
const LANDING = 'Groups'

const RootStack = StackNavigator(
  {
    'newGroup': {
      screen: NewGroupPage
    },
    'conversations': {
      screen: ConversationsPage
    },
    'single-conversation': {
      screen: SingleConversationPage
    }
    'signUp': {
      screen: SignUpPage
    },
    'signIn': {
      screen: SignInPage
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

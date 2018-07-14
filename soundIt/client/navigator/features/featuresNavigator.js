import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import STYLES from '../navigator-styles'

// NewGroupPage
import NewGroupPage from '../../new-group/new-group-page.js';
import ConversationsPage from '../../convserations/conversations-page.js';

// navigation
const LANDING = 'conversations'

const FeaturesStack = StackNavigator(
  {
    'newGroup': {
      screen: NewGroupPage
    },
    'conversations': {
      screen: ConversationsPage
    }
  },
  {
    initialRouteName: LANDING
  }
)

class FeaturesNavigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FeaturesStack screenProps={this.props.screenProps}/>
    )
  }
}

export default FeaturesNavigation

import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import STYLES from '../navigator-styles'

// Groups

// NewGroupPage
import NewGroupPage from '../../new-group/new-group-page.js';
import UsersGroupPage from '../../users-groups/users-groups-page.js';

// navigation
const LANDING = 'usersGroups'

const FeaturesStack = StackNavigator(
  {
    'newGroup': {
      screen: NewGroupPage
    },
    'usersGroups': {
      screen: UsersGroupPage
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

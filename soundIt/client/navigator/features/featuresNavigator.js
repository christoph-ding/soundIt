import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import STYLES from '../navigator-styles'

// Groups

// NewGroupPage
import NewGroupPage from '../../new-group/newGroupPage';

// navigation
const LANDING = 'newGroup'

const FeaturesStack = StackNavigator(
  {
    'newGroup': {
      screen: NewGroupPage
    }
  },
  {
    initialRouteName: LANDING
  },
  {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)

class FeaturesNavigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={STYLES.navigatorContainer}>
        <FeaturesStack screenProps={this.props.screenProps}/>
      </View>
    )
  }
}

export default FeaturesNavigation

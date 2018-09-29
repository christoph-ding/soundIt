import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';

class NavigateToMakeNewGroup extends Component {

  newGroup = () => {
    this.props.navigateAction('newGroup')
  }

  render() {
    return (
      <Button
        onPress={this.newGroup}
        title='New Group'
        color="#841584"
      />
    )
  }
}

export default NavigateToMakeNewGroup

import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';

class NavigateToConversations extends Component {

  seeThreads = () => {
    this.props.navigateAction('conversations')
  }

  render() {
    return (
      <Button
        onPress={this.seeThreads}
        title='My Groups'
        color="#841584"
      />
    )
  }
}

export default NavigateToConversations

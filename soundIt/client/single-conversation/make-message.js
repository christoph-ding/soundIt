import React, { Component } from 'react';
import { Button } from 'react-native';

import STYLES from './single-conversation-styles'

class MakeMessage extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    console.log('making message')
    // this.props.selectConversation(this.props.conversation)
  }

  render() {
    return(
      <Button
        title="Create"
        onPress={this.handleClick}
      />
    )
  }
}

export default MakeMessage;

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import SingleMessage from './singleMessage'

class MessageList extends Component {

  renderMessages = (messages) => {
    return (messages.map((message) => {
      return (<SingleMessage
                message={message}
              />)
    }))
  }

  getMessages = () =>
    this.props.messages

  render() {
    return (
      <View style={styles.container}>
        {this.renderMessages(this.getMessages())}
      </View>
    )
  }
}

export default MessageList

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  },
  item: {
    fontSize: 13,
    textAlign: 'center'
  }
});

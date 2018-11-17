import React, { Component } from 'react'
import { View } from 'react-native'

import SingleMessage from './single-message'

class MessagesList extends Component {
  constructor(props) {
    super(props)
  }

  renderMessages = (messages) => {
    let action = this.props.fetchSingleMessage    
    return (messages.map((message) => {
      // contrived
      message.answer = false
      return (<SingleMessage         
        message={message}
        fetchSingleMessage={action}
        key={message.MessageID}
      />)
    }))
  }

  render() {
    return (
      <View>
        {this.renderMessages(this.props.messages)}
      </View>
    )
  }
}

export default MessagesList

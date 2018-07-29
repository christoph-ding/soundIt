import React, { Component } from 'react'
import { View } from 'react-native'

import STYLES from './single-conversation-styles'
import SingleMessage from './single-message'

class MessagesList extends Component {
  constructor(props) {
    super(props)
  }

  renderMessages = (messages) => {
    let action = this.props.fetchSingleMessage
    return (messages.map((message) => {      
      return (<SingleMessage 
        message={message}
        fetchSingleMessage={action}
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

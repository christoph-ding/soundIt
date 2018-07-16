import React, { Component } from 'react'
import { View } from 'react-native'

import STYLES from './conversations-styles'
import SingleConversation from './single-conversation'

class ConversationsList extends Component {
  constructor(props) {
    super(props)
  }

  renderConversations = (conversations) => {
    let action = this.props.selectConversation
    return (conversations.map((conversation) => {
      return (<SingleConversation 
              conversation={conversation}
              selectConversation={action}
             />)
    }))
  }

  render() {
    return (
      <View style={STYLES.container}>
        {this.renderConversations(this.props.conversations)}
      </View>
    )
  }
}

export default ConversationsList

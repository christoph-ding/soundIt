import React, { Component } from 'react'
import { View } from 'react-native'

import STYLES from '../styles/styles'
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
      <View>
        {this.renderConversations(this.props.conversations)}
      </View>
    )
  }
}

// <View style={STYLES.list}>

export default ConversationsList

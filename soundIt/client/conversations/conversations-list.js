import React, { Component } from 'react'
import { View } from 'react-native'

import STYLES from './conversations-styles'
import SingleConversation from './single-conversation'

class ConversationsList extends Component {
  constructor(props) {
    super(props)
  }

  renderConversations = (conversations) => {
    return (conversations.map((conversation) => {
      console.log(conversation)
      return (<SingleConversation 
              conversation={conversation}
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

// renderListItems = (items) => {
//     let navigateAction = this.props.navigateAction
//     return (items.map((item) => {
//       return (<SingleGroup 
//               item={item}
//               navigateAction={navigateAction}
//              />)
//     }))
//   }

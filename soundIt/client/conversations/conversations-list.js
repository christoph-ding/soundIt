import React, { Component } from 'react';
import { View } from 'react-native';

import SingleConversation from './SingleConversation';

class ConversationsList extends Component {
  constructor(props) {
    super(props)
  }

  renderConversations = (conversations) => {
    return (conversations.map((conversation) => {
      return (<SingleConversation 
              conversation={conversation}
             />)
    }))
  }

  getActiveThreads = () =>
    this.props.threads

  render() {
    return (
      <View style={styles.container}>
        {this.renderConversations(this.props.threads)}
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

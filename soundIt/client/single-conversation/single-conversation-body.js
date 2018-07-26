import React, { Component } from 'react'
import { View, Text } from 'react-native'

import STYLES from './single-conversation-styles'
import MessagesList from './messages-list'
import MakeMessage from './make-message'

class SingleConversationBody extends Component {
  constructor(props) {
    super(props)    
  }

  render() {
    return (
      <View>
        <MessagesList 
         {...this.props}         
        />
        <MakeMessage
        />
      </View>
    )
  }
}

export default SingleConversationBody

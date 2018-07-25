import React, { Component } from 'react'
import { View, Text } from 'react-native'

import STYLES from './single-conversation-styles'
import MessagesList from './messages-list'

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
      </View>
    )
  }
}

export default SingleConversationBody

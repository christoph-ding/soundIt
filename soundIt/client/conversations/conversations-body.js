import React, { Component } from 'react'
import { View } from 'react-native'

import STYLES from './conversations-styles'
import ConversationsList from './conversations-list'

class ConversationsBody extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={STYLES.conversationsBody}>
        <ConversationsList 
         {...this.props}         
        />
      </View>
    )
  }
}

export default ConversationsBody

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import STYLES from './single-conversation-styles'

class SingleConversationBody extends Component {
  constructor(props) {
    super(props)    
  }

  render() {
    return (
      <View style={STYLES.body}>
        <Text>
          Hey
        </Text>
      </View>
    )
  }
}

export default SingleConversationBody

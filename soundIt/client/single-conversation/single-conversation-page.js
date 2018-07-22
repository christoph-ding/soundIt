import React, { Component } from 'react'
import { View } from 'react-native'
import { API } from 'aws-amplify'

import STYLES from './single-conversation-styles'
import SingleConversationBody from './single-conversation-body'

class SingleConversationPage extends Component {
  static navigationOptions = {
      header: null
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.fetchMessages()
  }     

  fetchMessages = () => {
    console.log('fetching conversation messages ... ')
  }

  render() {
    return (
      <View style={STYLES.pageContainer}>
        <SingleConversationBody
        />
      </View>
    )
  }
}

export default SingleConversationPage

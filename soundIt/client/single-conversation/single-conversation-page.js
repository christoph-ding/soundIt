import React, { Component } from 'react'
import { View } from 'react-native'
import { API } from 'aws-amplify'

import STYLES from './single-conversation-styles'
import SingleConversationBody from './single-conversation-body'
import ConversationHeader from './conversation-header'

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
    const selectedConversation = this.props.navigation.getParam('selected-conversation')
    return (
      <View style={STYLES.pageContainer}>
        <ConversationHeader
          name={selectedConversation.name}
        />
        <SingleConversationBody/>
      </View>
    )
  }
}

export default SingleConversationPage

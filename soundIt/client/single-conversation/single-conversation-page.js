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
    this.state = {

    }
  }

  componentWillMount() {
    const selectedConversation = this.props.navigation.getParam('selected-conversation')
    console.log(selectedConversation)
    this.fetchMessages()
  }     

  fetchMessages = () => {
    console.log('fetching conversation messages ... ')

    // get messages that have this groups id and sort id
    const apiName = 'Groups-Users'
    const path = '/messages'
    // this is contrived user data
    const testGroupID = '+01234567891'

    let myInit = {
      'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userID': testGroupID
      }
    }

    API.get(apiName, path, myInit)
    .then(response => {
      console.log('=============== messages ================')
      console.log(response)
      // const conversations = response.data.map((elem) => {
      //   return {'name': elem.EntityID, 
      //           'answered': elem.Answered};
      // })
      // this.setState({conversations: conversations})
    })
    .catch(err => {
      console.log('error:')
      console.log(err)
    });
  }

  render() {
    const selectedConversation = this.props.navigation.getParam('selected-conversation')
    console.log(selectedConversation)
    return (
      <View style={STYLES.pageContainer}>
        <ConversationHeader
          name={selectedConversation.name}
        />
        <SingleConversationBody

        />
      </View>
    )
  }
}

export default SingleConversationPage

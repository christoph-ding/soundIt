import React, { Component } from 'react'
import { View } from 'react-native'
import { API, Storage } from 'aws-amplify'
const uuidv1 = require('uuid/v1')

import STYLES from './single-conversation-styles'
import SingleConversationBody from './single-conversation-body'
import ConversationHeader from './conversation-header'
import MakeMessage from './make-message'

class SingleConversationPage extends Component {
  static navigationOptions = {
      header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      conversation: null
    }
  }

  componentWillMount() {
    const selectedConversation = this.props.navigation.getParam('selected-conversation')
    this.setState({conversation: selectedConversation})
    this.fetchMessages()
  }     

  fetchMessages = () => {
    // get messages that have this groups id and sort id
    const apiName = 'Groups-Users'
    const path = '/messages'
    // this is contrived user data
    const testGroupID = 'Second Group'

    let myInit = {
      'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'groupID': testGroupID
      }
    }

    API.get(apiName, path, myInit)
    .then(response => {
      const messages = response.data.Items.map((elem) => {
        return elem            
      })

      this.setState({messages: messages})
    })
    .catch(err => {
      console.log('error:')
      console.log(err)
    });
  }

  fetchSingleMessage = () => {
    // get a single audio recording
    console.log('fetching a single message')
  }

  async makeMessage() {
    console.log('making a message for S3')    
  }

  async makeMessageOrig() {
    console.log('making a message for S3')

    // we should only submit if it is valid
    const apiName = 'Groups-Users'
    const path = '/messages'
    const messageID = uuidv1() + '.txt'

    // this is contrived user data
    const testGroupID = 'Second Group'
    const testIndividualID = '+01234567891'

    await Storage.put(messageID, 'Yo')
    .then ((result) => {
      console.log('posting to message table')
      console.log(result)
      return new Promise(function(resolve, reject) {
        const newMessage = {
          body: {
            EntityID: testGroupID,
            IndividualID: testIndividualID,
            MessageID: messageID
          }
        }
        API.post(apiName, path, newMessage)
        .then(response => {
          console.log('success:')
          console.log(response)
          resolve()
        })
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    const selectedConversation = this.state.conversation
    console.log(this.state)
    return (
      <View style={STYLES.pageContainer}>
        <ConversationHeader
          name={selectedConversation.name}
        />
        <SingleConversationBody
          messages={this.state.messages}
          fetchSingleMessage={this.fetchSingleMessage}
        />
        <MakeMessage
          makeMessage={this.makeMessage}
        />
      </View>
    )
  }
}

export default SingleConversationPage

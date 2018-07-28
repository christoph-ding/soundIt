import React, { Component } from 'react'
import { View } from 'react-native'
import { API, Storage } from 'aws-amplify'

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
      messages: []
    }
  }

  componentWillMount() {
    const selectedConversation = this.props.navigation.getParam('selected-conversation')
    console.log(selectedConversation)
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
      console.log('=============== response ================')
      console.log(response)

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

  makeMessage = () => {
    console.log('making a message')
    // we should only submit if it is valid

    Storage.put('test.txt', 'Yo')
    .then ((result) => {
      console.log('result')
      console.log(result)
    })
    .catch(err => console.log(err));
  }

  render() {
    const selectedConversation = this.props.navigation.getParam('selected-conversation')
    console.log(this.state)
    return (
      <View style={STYLES.pageContainer}>
        <ConversationHeader
          name={selectedConversation.name}
        />
        <SingleConversationBody
          messages={this.state.messages}
        />
        <MakeMessage
          makeMessage={this.makeMessage}
        />
      </View>
    )
  }
}

export default SingleConversationPage

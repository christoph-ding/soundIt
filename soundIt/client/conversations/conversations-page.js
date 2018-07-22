import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { API } from 'aws-amplify'

import STYLES from './conversations-styles'
import ConversationsList from './conversations-list'

class ConversationsPage extends Component {
  static navigationOptions = {
      header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      conversations: null
    }
  }

  componentWillMount() {
    this.fetchGroups()
  }

  fetchGroups = () => {
    console.log('getting groups for this user')

    const apiName = 'Groups-Users'
    const path = '/groups'
    const userID = '+01234567891'

    // for whatever reason, the queryStringParameter attribute
    // in the docs aren't actually supported through the lambda
    // interface, we 'cleverly' put the userID in the headers
    let myInit = {
      'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userID': userID
      }
    }

    API.get(apiName, path, myInit)
    .then(response => {
      console.log('===========response =============')
      console.log(response)      
      // this.setState({conversations: response.conversations})
    })
    .catch(err => {
      console.log('error:')
      console.log(err)
    });

    const testData = [
      {
        'name': 'conversation one',
        'answered': true
      },
      {
        'name': 'conversation two',
        'answered': false
      }
    ]

    this.setState({conversations: testData})
  }

  selectConversation = () => {
    console.log('selecting a conversation ... ')
  }

  render() {
    return (
      <View style={STYLES.pageContainer}>      
        <ConversationsList
          conversations={this.state.conversations}
          selectConversation={this.selectConversation}
        />
      </View>
    )
  }
}

export default ConversationsPage;

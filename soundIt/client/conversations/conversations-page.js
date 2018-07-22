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
      conversations: []
    }
  }

  componentWillMount() {
    this.fetchGroups()
  }

  fetchGroups = () => {
    console.log('getting groups for this user')

    const apiName = 'Groups-Users'
    const path = '/groups'

    // this is contrived user data
    const testUserID = '+01234567891'

    // for whatever reason, the queryStringParameter attribute
    // in the docs aren't actually supported through the lambda
    // interface, we 'cleverly' put the userID in the headers
    let myInit = {
      'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userID': testUserID
      }
    }

    API.get(apiName, path, myInit)
    .then(response => {
      const conversations = response.data.map((elem) => {
        return {'name': elem.EntityID, 
                'answered': true};
      })
      this.setState({conversations: conversations})
    })
    .catch(err => {
      console.log('error:')
      console.log(err)
    });
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

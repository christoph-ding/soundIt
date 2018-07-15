import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { API } from 'aws-amplify'

import STYLES from './conversations-styles'
import ConversationsBody from './conversations-body'

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

  render() {
    return (
      <View style={STYLES.pageContainer}> 
        <ConversationsBody
          conversations={this.state.conversations}
        />
      </View>
    )
  }
}

export default ConversationsPage;

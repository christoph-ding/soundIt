import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { API } from 'aws-amplify';

class ConversationsPage extends Component {
  static navigationOptions = {
      header: null
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.fetchGroups()
  }

  fetchGroups = () => {
    console.log('getting groups for this user')

    const apiName = 'Groups-Users'
    const path = '/groups'

    // test data
    const testData = [
      {
        'group': 'group one',
        'answered': true
      },
      {
        'group': 'group two',
        'answered': false
      }
    ]

    this.setState({groups: testData}, () => {
      console.log(this.state)
    })

  }

  render() {
    return (
      <View style={STYLES.pageContainer}> 
        
      </View>
    )
  }
}

export default ConversationsPage;

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import STYLES from './new-group-styles'
import NewGroupForm from './form/newGroupForm'

class NewGroupPage extends Component {
  static navigationOptions = {
      header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      newGroupName: '',
      selectedUsers: []
    }
  }

  componentWillMount() {
    this.fetchUsers()
  }

  // we will fetch data when we come to this page
  fetchUsers = () => {
    console.log('getting data ...')

    const testFriends = ['Friend One',
                         'Friend Two',
                         'Friend Three']

    this.setState({users: testFriends})
  }

  handleInputChange = (key, value) => {
    console.log('handling input change ... ')
    const newState = {}
    newState[key] = value
    // this.setState(newState)
    this.setState(newState, () => {
      console.log(this.state)
    })
  }

  submitNewGroup = () => {

  }

  render() {
    console.log('==========================')
    console.log(this.state)
    return (
      <View style={STYLES.pageContainer}>
        <NewGroupForm
         handleInputChange={this.handleInputChange}
         submitNewGroup={this.submitNewGroup}
        />
      </View>
    )    
  }
  
}

export default NewGroupPage;

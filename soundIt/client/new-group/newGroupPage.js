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
      newGroupName: '' 
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

  handleInputChange = () => {

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

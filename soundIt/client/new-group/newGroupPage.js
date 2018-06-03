import React, { Component } from 'react';
import { View } from 'react-native';

import STYLES from '../new-group-styles'
import NewGroupForm from './form/createNewGroup'

class NewGroupPage extends Component {
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

    this.state.setState({users: testFriends})
  }

  handleChange = () => {

  }

  submitNewGroup = () => {

  }

  render() {
    console.log(this.state)

    return (
      <View style={STYLES.pageContainer}>
        <NewGroupForm
         handleChange={this.handleChange}
         submitNewGroup={this.submitNewGroup}
        />
      <View/>
    )
  }
}

export default NewGroupPage;

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import STYLES from './new-group-styles'
import NewGroupForm from './form/newGroupForm'
import UsersBody from './users/usersBody'

class NewGroupPage extends Component {
  static navigationOptions = {
      header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      newGroupName: '',
      selectedUsers: {

      }
    }
  }

  componentWillMount() {
    this.fetchUsers()
  }

  // we will fetch data when we come to this page
  fetchUsers = () => {
    console.log('getting data ...')

    const testFriends = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }      
    ]

    this.setState({users: testFriends})
  }

  handleInputChange = (key, value) => {
    const newState = {}
    newState[key] = value
    this.setState(newState)
  }

  handleSubmitNewGroup = () => {
    console.log('handling submitting new group with: ')
    this.submitNewGroup()
  }

  // should only work if there are users selected, and a name
  submitNewGroup = () => {
    console.log('submitting')
  }

  selectUser = (user) => {
    let userCopy = Object.assign({}, this.state.selectedUsers)

    if (this.state.selectedUsers.hasOwnProperty(user)) {
      userCopy.user = !(userCopy.user)
    } else {
      userCopy.user = true
    }

    console.log(userCopy)
  }

  render() {
    console.log('==========================')
    console.log(this.state)
    return (
      <View style={STYLES.pageContainer}>
        <NewGroupForm
         handleInputChange={this.handleInputChange}
         submitNewGroup={this.handleSubmitNewGroup}
        />
        <UsersBody
         users={this.state.users}
         selectUser={this.selectUser}
        />
      </View>
    )    
  }
  
}

export default NewGroupPage;

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { API } from 'aws-amplify';
const uuidv1 = require('uuid/v1');

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
      selectedUsers: {}
    }
  }

  componentWillMount() {
    this.fetchUsers()
  }


  // we will fetch data when we come to this page
  fetchUsers = () => {
    console.log('getting data ...')

    const apiName = 'Groups-Users'
    const path = '/users/'

    API.get(apiName, path)
    .then(response => {
      console.log('response: ')
      console.log(response)

      const userData = response.users

      this.setState({users: userData}, () => {
        console.log(this.state)
      })
    })
    .catch(err => {
      console.log('error:')
      console.log(err)
    });
  }

  handleInputChange = (key, value) => {
    const newState = {}
    newState[key] = value
    this.setState(newState)
  }

  handleSubmitNewGroup = () => {
    // we should only submit if it is valid
    let selectedUsers = Object.values(this.state.selectedUsers)
    let anySelected = Boolean(selectedUsers.some( (value)=> { return value }) && 
                      selectedUsers.length)
    let isReadyToSubmit = Boolean(this.state.newGroupName.length &&
                                  anySelected)    

    if (isReadyToSubmit) {
      this.submitNewGroup()
    }
  }

  // should only work if there are users selected, and a name
  submitNewGroup = () => {
    console.log('submitting')

    const apiName = 'SoundIt'
    const endPoint = '/Groups'

    let newGroup = {
      body: {
          ID: uuidv1(),
          name: this.state.itemName          
        }
      }
    }

  selectUser = (user) => {
    let userCopy = Object.assign({}, this.state.selectedUsers)

    if (userCopy.hasOwnProperty(user)) {
      userCopy[user] = !(userCopy[user])
    } else {
      userCopy[user] = true
    }

    this.setState({selectedUsers: userCopy})
  }

  render() {
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

import React, { Component } from 'react'
import { View } from 'react-native'
import { API } from 'aws-amplify'

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

  fetchUsers = () => {
    console.log('getting data ...')

    const apiName = 'Groups-Users'
    const path = '/users'

    API.get(apiName, path)
    .then(response => {
      this.setState({users: response.users})
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

    const apiName = 'Groups-Users'
    const path = '/groups'
    const selectedUsers = Object.keys(this.state.selectedUsers).filter(
      (user) => { return this.state.selectedUsers[user]})

    let newGroup = {
      body: {
          display: this.state.newGroupName,
          members: selectedUsers
        }
      }

    API.post(apiName, path, newGroup)
    .then(response => {
      console.log('success:')
      console.log(response)
    })
     .catch(err => {
      console.log(err)
    })
  }

  selectUser = (user) => {
    let userCopy = Object.assign({}, this.state.selectedUsers)

    if (userCopy.hasOwnProperty(user.IndividualID)) {
      userCopy[user.IndividualID] = !(userCopy[user.IndividualID])
    } else {
      userCopy[user.IndividualID] = true
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

export default NewGroupPage

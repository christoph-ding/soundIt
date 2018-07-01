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
        },
        {
          name: 'Some guy',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        }       
      ]
      this.setState({users: testFriends}, () => {
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

    // API.post(apiName, path, newItem).then(response => {
    // console.log(response)
    // }).catch(error => {
    //     console.log(error.response)
    // });

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

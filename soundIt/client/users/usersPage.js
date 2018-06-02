import React, { Component } from 'react';

// Components for SignIn Page
import UsersBody from './usersBody';

const testFriends = ['Friend One', 
                     'Friend Two', 
                     'Friend Three']

class UsersPage extends Component {
  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    this.fetchUsers()
  }

  // we will fetch data when we come to this page
  fetchUsers = () => {
    console.log('getting data ...')
  }

  render() {
    return (
      <UsersBody navigateAction={this.props.navigation.navigate}/>
    )
  } 
}

export default UsersPage;

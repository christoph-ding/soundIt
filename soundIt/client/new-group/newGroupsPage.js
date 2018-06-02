import React, { Component } from 'react';

// Components for SignIn Page
import UsersBody from './usersBody';

const testFriends = ['Friend One', 
                     'Friend Two', 
                     'Friend Three']

class UsersPage extends Component {
  static navigationOptions = {
    header: null
    this.state = {
      users: []
    }
  }

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.fetchUsers()
  }

  // we will fetch data when we come to this page
  fetchUsers = () => {
    console.log('getting data ...')
    this.state.setState({users: testFriends})
  }

  render() {
    console.log(this.state)
    return (
      <UsersBody 
        navigateAction={this.props.navigation.navigate}
        users={this.state.users}
      />
    )
  } 
}

export default UsersPage;

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import SingleUser from './singleUser'

class UsersList extends Component {
  constructor(props) {
    super(props)
  }

  renderUsers = (users) => {
    // console.log(this.props)
    return (users.map((user, i) => {
      return (<SingleUser
              key={i}
              user={user}
             />)
    }))
  }

  render() {
    return (
      <View>
        {this.renderUsers(this.props.users)}
      </View>
    )
  }
}

export default UsersList

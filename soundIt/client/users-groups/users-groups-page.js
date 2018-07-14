import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { API } from 'aws-amplify';

class UsersGroupsPage extends Component {
  static navigationOptions = {
      header: null
  }

  constructor(props) {
    super(props)
    this.state = {     
    }
  }

  componentWillMount() {
    this.fetchGroups()
  }

  fetchGroups = () => {
    console.log('getting groups for this user')
  }

  render() {
    return (
      <Text> Hey </Text>
    )
  }
}

export default UsersGroupsPage;

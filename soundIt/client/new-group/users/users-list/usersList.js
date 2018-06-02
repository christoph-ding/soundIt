import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import SingleUser from './singleUser'

class UsersList extends Component {

  renderUsers = (users) => {
    let navigateAction = this.props.navigateAction
    return (users.map((user) => {
      return (<SingleUser
              user={user}
              navigateAction={navigateAction}
             />)
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderUsers(this.props.users)}
      </View>
    )
  }
}

export default UsersList

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import UsersList from './usersList';

class UsersBody extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UsersList 
         threads={this.props.data}
         navigateAction={this.props.navigateAction}
        />
      </View>
    )
  }
}

export default UsersBody

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'blue',
  }
});

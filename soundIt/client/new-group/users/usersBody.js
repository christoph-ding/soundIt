import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import UsersList from './usersList';
import NewGroup from '../groups/newGroup';

// class UsersBody extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <NewGroup />
//         <UsersList 
//          users={this.props.data}
//          navigateAction={this.props.navigateAction}
//         />
//       </View>
//     )
//   }
// }

class UsersBody extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Hey </Text>
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

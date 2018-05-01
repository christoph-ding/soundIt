import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  NavigatorIOS
} from 'react-native';

import GroupsList from './groupsList';

// TODO this is contrived data ... should it originate here?
const testFriends = ['Friend One', 
                     'Friend Two', 
                     'Friend Three']

class UsersBody extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GroupsList 
         threads={testThreads}
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

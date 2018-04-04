import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import List from '../ui/list';

class FriendList extends Component {

  getFriends = () =>
    this.props.friends

  render() {
    return (
      <View style={styles.container}>
        <List items={this.getFriends()}/>
      </View>
    )
  }
}

export default FriendList

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Threads from './threads/threads';
import Friends from './friends/friends';
import Groups from './groups/groups';
import Conversation from './conversation/conversation';

class Application extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helper}>
            Entire Application
        </Text>
        <Threads />
        <Friends />
        <Groups />
        <Conversation />
      </View>
    )
  }
}

export default Application

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  helper: {
    fontSize: 15,
    textAlign: 'center'
  }
});

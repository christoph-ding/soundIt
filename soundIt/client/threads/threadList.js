import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import List from '../ui/list';

class ThreadList extends Component {

  getActiveThreads = () =>
    this.props.threads

  render() {
    return (
      <View style={styles.container}>
        <List items={this.getActiveThreads()}/>
      </View>
    )
  }
}

export default ThreadList

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

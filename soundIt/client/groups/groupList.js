import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import List from '../ui/list';

class GroupList extends Component {

  getGroups = () =>
    this.props.groups

  render() {
    return (
      <View style={styles.container}>
        <List items={this.getGroups()}/>
      </View>
    )
  }
}

export default GroupList

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

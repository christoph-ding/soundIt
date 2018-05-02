import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import GroupsList from './groupsList';

class GroupsBody extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GroupsList 
         threads={this.props.data}
         navigateAction={this.props.navigateAction}
        />
      </View>
    )
  }
}

export default GroupsBody

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'blue',
  }
});

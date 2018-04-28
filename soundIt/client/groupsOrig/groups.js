import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import GroupList from './groupList';

const testGroups = ['Thing One', 
                     'Thing Two', 
                     'Thing Three']

class Groups extends Component {
   render() {
    return (
      <View style={styles.container}>
        <GroupList groups={testGroups}/>
      </View>
    )
  }
}

export default Groups

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'teal',
  }
});

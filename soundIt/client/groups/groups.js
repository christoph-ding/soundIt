import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import ActionButton from '../ui/actionButton';
import Banner from '../ui/banner';
import GroupList from './groupList';

const testGroups = ['Thing One', 
                     'Thing Two', 
                     'Thing Three']

class Groups extends Component {
   render() {
    return (
      <View style={styles.container}>
        <ActionButton title='Navigate 1'/>
        <Banner title='Groups'/>
        <ActionButton title='Navigate 2'/>
        <GroupList groups={testGroups}/>
      </View>
    )
  }
}

export default Groups

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'teal',
  }
});

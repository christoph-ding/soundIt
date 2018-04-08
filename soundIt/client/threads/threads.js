import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import ActionButton from '../ui/actionButton';
import Banner from '../ui/banner';
import ThreadList from './threadList';

// TODO this is contrived data ... should it originate here?
const testThreads = ['Thing One', 
                     'Thing Two', 
                     'Thing Three']

class Threads extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActionButton title='Navigate 1'/>
        <Banner title='Threads'/>
        <ActionButton title='Navigate 2'/>
        <ThreadList threads={testThreads}/>
      </View>
    )
  }
}

export default Threads

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'blue',
  }
});

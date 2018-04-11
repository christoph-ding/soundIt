import React, { Component } from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  NavigatorIOS
} from 'react-native';

import ActionButton from '../ui/actionButton';
import Banner from '../ui/banner';
import ThreadList from './threadList';

// TODO this is contrived data ... should it originate here?
const testThreads = ['Thing One', 
                     'Thing Two', 
                     'Thing Three']

class Threads extends Component {

  seeFriends = () => {
    this.props.navigate('Friends')
  }

  seeGroups = () => {
    this.props.navigate('Groups') 
  }

  render() {
    return (
      <View style={styles.container}>
        <Banner title='Threads'/>
        <ActionButton title='Friends' action={this.seeFriends}/>
        <ActionButton title='Groups'  action={this.seeGroups}/>
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

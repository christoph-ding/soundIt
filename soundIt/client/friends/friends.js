import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import ActionButton from '../ui/actionButton';
import Banner from '../ui/banner';
import FriendList from './friendList';

const testFriends = ['Friend One', 
                     'Friend Two', 
                     'Friend Three']

class Friends extends Component {
   render() {
    return (
      <View style={styles.container}>
        <ActionButton title='Navigate 1'/>
        <Banner title='Friends'/>
        <ActionButton title='Navigate 2'/>
        <FriendList friends={testFriends}/>
      </View>
    )
  }
}

export default Friends

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'green',
  }
});

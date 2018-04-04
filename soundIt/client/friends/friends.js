import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Banner from '../ui/banner';
import FriendList from './friendList';

const testFriends = ['Friend One', 
                     'Friend Two', 
                     'Friend Three']

class Friends extends Component {
   render() {
    return (
      <View style={styles.container}>
        <Banner title='Friends'/>
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

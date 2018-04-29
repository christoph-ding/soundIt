import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Banner from '../ui/banner';
import MessageList from './messageList';

const testMessages = [{content: 'message one'}, 
                      {content: 'message two'}, 
                      {content: 'message three'}]

class Conversation extends Component {
   render() {
    return (
      <View style={styles.container}>
        <Banner title='Conversation'/>
        <MessageList messages={testMessages}/>
      </View>
    )
  }
}

export default Conversation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    width: '100%',
    backgroundColor: 'blue',
  }
});

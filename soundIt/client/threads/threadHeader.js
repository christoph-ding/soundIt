import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  NavigatorIOS
} from 'react-native';

import Banner from '../ui/banner';
import ActionButton from '../ui/actionButton';

class ThreadHeaderOrig extends Component {

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
      </View>
    )
  }
}

class ThreadHeader extends Component {

  // seeFriends = () => {
  //   this.props.navigate('Friends')
  // }

  // seeGroups = () => {
  //   this.props.navigate('Groups') 
  // }

  render() {
    return (
      <Banner title='Threads'/>
    )
  }
}
export default ThreadHeader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
  }
});

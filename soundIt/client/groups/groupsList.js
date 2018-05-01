import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import SingleThread from './singleThread'

class GroupsList extends Component {

  renderListItems = (items) => {
    let navigateAction = this.props.navigateAction
    return (items.map((item) => {
      return (<SingleThread 
              item={item}
              navigateAction={navigateAction}
             />)
    }))
  }

  getActiveThreads = () =>
    this.props.threads

  render() {
    return (
      <View style={styles.container}>
        {this.renderListItems(this.props.threads)}
      </View>
    )
  }
}

export default GroupsList

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import SingleUser from './singleUser'

class UsersList extends Component {

  renderListItems = (items) => {
    let navigateAction = this.props.navigateAction
    return (items.map((item) => {
      return (<SingleUser 
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

export default UsersList

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

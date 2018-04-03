import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}> {this.props.item} </Text>
      </View>
    )
  }
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  },
  item: {
    fontSize: 13,
    textAlign: 'center'
  }
});

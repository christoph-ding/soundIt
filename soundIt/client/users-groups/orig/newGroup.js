import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class NewGroup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> 
          Make New Group
        </Text>
      </View>
    )
  }
}

export default NewGroup

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

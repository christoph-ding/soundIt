import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class List extends Component {

  renderListItems = (items) => {
    return (items.map((item) => {
      return <Text> {item} </Text>
    }))
  }

  render() {
    let listItems = this.renderListItems(this.props.items)

    return (
      <View style={styles.container}>
        {listItems}
      </View>
    )
  }
}

export default List

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});

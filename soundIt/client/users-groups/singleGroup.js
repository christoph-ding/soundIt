import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class SingleGroup extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.navigateAction('Conversation', this.props.item)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item} onPress={this.handleClick}> 
          {this.props.item.title}
        </Text>
      </View>
    )
  }
}

export default SingleGroup

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

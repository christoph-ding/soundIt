import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class SingleUser extends Component {
  
  handleClick = () => {
    this.props.navigateAction('Conversation', this.props.item)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item} onPress={this.handleClick}> 
          {this.props.user}
        </Text>
      </View>
    )
  }
}

export default SingleUser

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

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class SingleMessage extends Component {
  
  handleClick = () => {
    console.log('clicked on a message!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message} onPress={this.handleClick}> 
          {this.props.message.content}
        </Text>
      </View>
    )
  }
}

export default SingleMessage

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  },
  message: {
    fontSize: 13,
    textAlign: 'center'
  }
});

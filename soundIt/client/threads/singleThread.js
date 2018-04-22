import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class SingleThread extends Component {
  
  handleClick = () => {
    console.log('test')
    this.props.navigateAction('Conversation')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item} onPress={this.handleClick}> 
          {this.props.item}         
        </Text>
      </View>
    )
  }
}

export default SingleThread

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

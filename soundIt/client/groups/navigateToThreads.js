import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

class NavigateToThreads extends Component {

  seeThreads = () => {
    this.props.navigateAction('Threads')
  }

  render() {
    return (
      <Button style={styles.button}
        onPress={this.seeThreads}
        title='Threads'
        color="#841584"
      />
    )
  }
}

export default NavigateToThreads

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'orange',
  }
});

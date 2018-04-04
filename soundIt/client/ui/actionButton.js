import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

class ActionButton extends Component {

  testAction = () => {
    return
  }

  render() {
    return (
      <Button style={styles.button}
        onPress={this.testAction}
        title="Learn More"
        color="#841584"
      />
    )
  }
}

export default ActionButton

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'orange',
  }
});

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

class ActionButton extends Component {

  handleClick = () => {
    this.props.action()
  }

  render() {
    return (
      <Button style={styles.button}
        onPress={this.handleClick}
        title={this.props.title}
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

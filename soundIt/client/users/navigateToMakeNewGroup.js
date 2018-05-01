import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

class NavigateToMakeNewGroup extends Component {

  seeFriends = () => {
    this.props.navigateAction('Users')
  }

  render() {
    return (
      <Button style={styles.button}
        onPress={this.seeFriends}
        title='New Group'   
        color="#841584"
      />
    )
  }
}

export default NavigateToMakeNewGroup

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'orange',
  }
});

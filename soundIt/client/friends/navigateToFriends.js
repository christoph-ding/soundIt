import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

class NavigateToFriends extends Component {

  seeFriends = () => {
    this.props.navigateAction('Friends')
  }

  render() {
    return (
      <Button style={styles.button}
        onPress={this.seeFriends}
        title='Friends'   
        color="#841584"
      />
    )
  }
}

export default NavigateToFriends

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'orange',
  }
});

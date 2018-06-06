import React, { Component } from 'react';
import { ListItem } from 'react-native-elements'
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import STYLES from '../../new-group-styles'

class SingleUser extends Component {
  
  handleClick = () => {
    this.props.navigateAction('Conversation', this.props.item)
  }

  render() {
    return (
      <ListItem
        title="yo"
        hideChevron
      />
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

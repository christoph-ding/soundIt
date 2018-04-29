import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Banner from '../ui/banner';

class ConversationHeader extends Component {
  render() {
    return (
      <Banner title={this.props.title}/>
    )
  }
}
export default ConversationHeader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
  }
});

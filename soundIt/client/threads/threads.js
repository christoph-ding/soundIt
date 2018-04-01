import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Banner from '../ui/banner';

class Threads extends Component {
   render() {
    return (
      <View style={styles.container}>
        <Banner title='Threads'/>
      </View>
    )
  }
}

export default Threads

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'blue',
  }
});

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

class Banner extends Component {
   render() {
    return (
      <View style={styles.banner}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

// TODO - prop Types + default, etc

export default Banner

const styles = StyleSheet.create({
  banner: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  }
});

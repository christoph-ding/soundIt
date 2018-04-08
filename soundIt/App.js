/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// import Application from './client/entireApplication';
// import Test from './client/entireApplication';

class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class TestTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Second</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: TestTwo,
    // headerMode: 'none'
    // navigationOptions: {
    //   headerVisible: false
    // }
  }
});

export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  }
});

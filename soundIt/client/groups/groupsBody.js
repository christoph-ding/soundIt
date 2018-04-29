import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  NavigatorIOS
} from 'react-native';

// import ThreadList from './threadList';

// TODO this is contrived data ... should it originate here?
const testThreads = [{title: 'Thing One'}, 
                     {title: 'Thing Two'}, 
                     {title: 'Thing Three'}]

// class ThreadsOrig extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <ThreadList 
//          threads={testThreads}
//          navigateAction={this.props.navigateAction}
//         />
//       </View>
//     )
//   }
// }

class GroupsBody extends Component {
  render() {
    return (
      <Text> Yo </Text>
    )
  }
}

export default GroupsBody

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'blue',
  }
});

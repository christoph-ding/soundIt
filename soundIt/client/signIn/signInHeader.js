import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Banner from '../ui/banner';

class SignInHeader extends Component {
  render() {
    return (
      <Banner title='Sign In'/>
    )
  }
}
export default SignInHeader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
  }
});
  

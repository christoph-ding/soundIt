import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Banner from '../ui/banner';

class SignUpHeader extends Component {
  render() {
    return (
      <Banner title='Sign Up'/>
    )
  }
}
export default SignUpHeader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
  }
});
  

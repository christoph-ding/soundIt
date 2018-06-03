import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Banner from '../../ui/banner';

class AuthHeader extends Component {
  render() {
    return (
      <Banner title='Log In'/>
    )
  }
}
export default AuthHeader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
  }
});
  

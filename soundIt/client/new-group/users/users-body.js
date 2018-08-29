import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import STYLES from '../new-group-styles'
import UsersList from './users-list/users-list';

class UsersBody extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.users === nextProps.users ? false : true
  }

  render() {
    return (
      <View style={STYLES.usersBody}>
        <UsersList 
          {...this.props}
        />
      </View>
    )
  }
}

export default UsersBody

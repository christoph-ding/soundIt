import React, { Component } from 'react';
import { ListItem } from 'react-native-elements'
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import STYLES from '../../new-group-styles'

class SingleUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  handleClick = () => {
    this.setState(
      {selected: !(this.state.selected)}, 
      () => {this.props.selectUser(this.props.user)}
    )
  }

  render() {
    const {user} = this.props
    return (
      <ListItem
        title={user.Display}
        containerStyle={
          {
            backgroundColor: this.state.selected ? "blue" : "transparent"
          }
        }
        hideChevron
        onPress={this.handleClick}
      />
    )
  }
}

export default SingleUser

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
    this.
    this.toggleSelect()
  }

  toggleSelect = () => {
    this.setState({selected: !(this.state.selected)})
  }

  test = () => {
    console.log(this.state)
  }

  render() {
    return (
      <ListItem
        title="yo"
        containerStyle={
          {
            backgroundColor: this.state.selected ? "blue" : "transparent"
          }
        }
        hideChevron
        onPress={this.toggleSelect}
      />
    )
  }
}

export default SingleUser

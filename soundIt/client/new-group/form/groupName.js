import React, { Component } from 'react';
import { FormInput } from 'react-native-elements';

import STYLES from '../new-group-styles'

class GroupName extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {handleInputChange} = this.props

    return (
      <FormInput
        style={STYLES.newGroupInput}
        placeholder="New Group Name"
        onChangeText={handleInputChange.bind(null, "newGroupName")}
      />
    )
  }
}

export default GroupName;

import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel,
         FormInput,
         TextInput
} from 'react-native-elements';

import STYLES from '../../styles/styles'

class GroupName extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {handleInputChange} = this.props

    return (
      <View style={STYLES.groupName}>
        <FormLabel labelStyle={STYLES.label}> New Group </FormLabel>
        <FormInput
          containerStyle={STYLES.inputBox}
          placeholder="Group Name"
          onChangeText={handleInputChange.bind(null, "newGroupName")}
          placeholderTextColor="#ff4500"
        />
      </View>
    )
  }
}

export default GroupName;

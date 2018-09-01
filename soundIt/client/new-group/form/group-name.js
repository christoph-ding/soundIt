import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel,
         FormInput 
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
        <FormLabel labelStyle={STYLES.label}> Create New Group </FormLabel>
        <FormInput
          inputStyle={STYLES.inputLine}          
          placeholder="Group Name"
          onChangeText={handleInputChange.bind(null, "newGroupName")}
        />
      </View>
    )
  }
}

export default GroupName;

import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel,
         FormInput 
} from 'react-native-elements';

import STYLES from '../new-group-styles'

class GroupName extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {handleInputChange} = this.props

    return (
      <View style={style.container}>
        <FormLabel> Create New Group </FormLabel>
        <FormInput
          style={STYLES.newGroupInput}
          placeholder="Group Name"
          onChangeText={handleInputChange.bind(null, "newGroupName")}
        />
      </View>
    )
  }
}

export default GroupName;

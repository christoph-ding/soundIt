import React, { Component } from 'react';
import { View } from 'react-native';

import STYLES from '../new-group-styles'
import GroupName from './groupName'
import CreateButton from './createButton'

class NewGroupForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {handleInputChange, submitNewGroup} = this.props

    return (
      <View style={STYLES.newGroupForm}>
        <GroupName handleInputChange={handleInputChange}/>
        <CreateButton submitNewGroup={submitNewGroup}/>
      </View>      
    )
  }
}

export default NewGroupForm;

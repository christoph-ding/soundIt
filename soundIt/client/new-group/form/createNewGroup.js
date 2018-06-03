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
    const {handleChange, submitNewGroup} = this.props

    return (
      <View style={STYLES.newGroupForm}>
        <GroupName handleChange={handleChange}/>
        <CreateButton submitNewGroup={submitNewGroup}/>
      <View/>      
    )
  }
}

export default NewGroupForm;

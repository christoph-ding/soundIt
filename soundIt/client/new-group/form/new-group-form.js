import React, { Component } from 'react';
import { View } from 'react-native';

import STYLES from '../new-group-styles'
import GroupName from './group-name'
import CreateButton from './create-button'

class NewGroupForm extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.submitNewGroup === nextProps.submitNewGroup ? false : true
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

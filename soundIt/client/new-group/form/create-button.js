import React, { Component } from 'react';
import { View,
         Button } from 'react-native';

import STYLES from '../../styles/styles'

class CreateButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { submitNewGroup } = this.props
    return(
      <View style={STYLES.button}> 
        <Button
          title="Create"
          color="#ff4500"
          onPress={submitNewGroup}
        />
      </View>
    )
  }
}

export default CreateButton;

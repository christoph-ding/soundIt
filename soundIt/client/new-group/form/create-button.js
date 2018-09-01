import React, { Component } from 'react';
import { Button } from 'react-native';

import STYLES from '../../styles/styles'

class CreateButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { submitNewGroup } = this.props
    return(
      <Button
        style={STYLES.button}
        title="Create"
        onPress={submitNewGroup}
      />
    )
  }
}

export default CreateButton;

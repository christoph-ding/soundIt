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
        title="Create"
        color="#000000"
        onPress={submitNewGroup}
      />
    )
  }
}

export default CreateButton;

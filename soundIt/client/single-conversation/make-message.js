import React, { Component } from 'react';
import { Button } from 'react-native';


class MakeMessage extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {    
    this.props.makeMessage()
  }

  render() {
    return(
      <Button
        color="black"
        title="Tap to Create Message"
        onPress={this.handleClick}
      />
    )
  }
}

export default MakeMessage;

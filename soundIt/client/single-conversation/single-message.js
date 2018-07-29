import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'

import STYLES from './single-conversation-styles'

class SingleMessage extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.fetchSingleMessage(this.props.fetch)
  }

  render() {
    return (
      <ListItem
        title = {this.props.message.IndividualID}
        // containerStyle={
        //   {
        //     backgroundColor: this.props.conversation.answered ? "blue" : "transparent"
        //   }
        // }
        onPress={this.handleClick}
      />
    )
  }
}

export default SingleMessage

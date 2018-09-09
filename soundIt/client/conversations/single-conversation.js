import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'

import STYLES from '../styles/styles'

class SingleConversation extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.selectConversation(this.props.conversation)
  }

  render() {
    return (
      <ListItem
        title = {this.props.conversation.name}
        onPress={this.handleClick}
      />
    )
  }
}

// containerStyle={
//           {
//             backgroundColor: this.props.conversation.answered ? "blue" : "transparent"
//           }
//         }

export default SingleConversation

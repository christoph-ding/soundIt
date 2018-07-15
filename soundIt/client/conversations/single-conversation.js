import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'

import STYLES from './conversations-styles'

class SingleConversation extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    // this.props.navigateAction('Conversation', this.props.item)
  }

  render() {
    return (
      <ListItem
        title = {this.props.conversation.name}
        containerStyle={
          {
            backgroundColor: this.props.conversation.answered ? "blue" : "transparent"
          }
        }
      />
    )
  }
}

export default SingleConversation

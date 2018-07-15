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
      />
    )
  }
}

export default SingleConversation

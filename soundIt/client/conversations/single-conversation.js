import React, { Component } from 'react'
import { ListItem } from 'react-native-elements'
import { View } from 'react-native';

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
        title = 'test'
      />
    )
  }
}

export default SingleConversation

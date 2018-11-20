import React, { Component } from 'react'
import { ListItem, Icon } from 'react-native-elements'


import STYLES from '../styles/styles'

class SingleMessage extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.fetchSingleMessage(this.props.message)
  }

  render() {
    console.log(this.props)
    return (
      <ListItem
        title = { this.props.answered ? this.props.message.IndividualID : "Please answer to hear this"}
        containerStyle={
          {
            backgroundColor: this.props.answered ? "#ff8c00" : "#fffae6",
            // backgroundColor: this.props.answered ? "blue" : "red",
            marginBottom: 12,
            borderWidth: 2,
            borderColor: '#ff8c00',
            borderBottomWidth: 2,
            borderBottomColor: '#ff8c00',
          }
        }
        leftIcon={
          <Icon
            name='play-arrow'
            color='#fffae6'
          />
        }
        hideChevron
        onPress={this.handleClick}
      />
    )
  }
}

export default SingleMessage

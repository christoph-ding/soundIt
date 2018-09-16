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
    console.log('=================')
    console.log(this.props.message)
    return (
      <ListItem
        title = {this.props.message.IndividualID}
        containerStyle={
          {
            backgroundColor: this.props.message.answer ? "#ff8c00" : "#fffae6",
            marginBottom: 12,
            borderWidth: 2,
            borderRadius: 13,
            borderColor: '#ff8c00',
            borderBottomWidth: 2,
            borderBottomColor: '#ff8c00',
            width: '80%',
            marginLeft: 20
          }
        }
        leftIcon={
          <Icon
            name='play-arrow'
            color={this.props.message.answer ? "#fffae6": "#ff8c00"}
            containerStyle={
              {                
                paddingRight: 20,
                paddingLeft: 20
              }
            }
          />
        }
        hideChevron
        onPress={this.handleClick}
      />
    )
  }
}

export default SingleMessage

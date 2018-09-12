import React, { Component } from 'react'
import { ListItem, CheckBox} from 'react-native-elements'
import { View } from 'react-native';

import STYLES from '../../../styles/styles'

class SingleUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  handleClick = () => {
    this.setState(
      {selected: !(this.state.selected)}, 
      () => {this.props.selectUser(this.props.user)}
    )
  }

  render() {
    const {user} = this.props
    return (
      <View>
      <ListItem
        title={user.Display}        
        hideChevron
        leftIcon={<CheckBox 
                  onPress={this.handleClick}
                  uncheckedIcon='circle-o'
                  checkedIcon='dot-circle-o'
                  checked={this.state.selected}
                  checkedColor='#ff8c00'
                  containerStyle={{ backgroundColor: "transparent" }}/>}
        titleStyle={{ color: 'black' }}
      />
      </View>
    )
  }
}

export default SingleUser

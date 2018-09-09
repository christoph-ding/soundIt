import React, { Component } from 'react';
import { View } from 'react-native';

import Banner from '../ui/banner';

class ConversationHeader extends Component {
  render() {
    return (
      <Banner         
        title={this.props.name}/>
    )
  }
}
export default ConversationHeader

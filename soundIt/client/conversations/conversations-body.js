import React, { Component } from 'react';
import { View } from 'react-native';

import ConversationsList from './conversations-list';

class ConversationsBody extends Component {
  render() {
    return (
      <View style={styles.conversationsBody}>
        <ConversationsList 
         conversations={this.props.data}
        />
      </View>
    )
  }
}

// class ConversationsBody extends Component {
//   render() {
//     return (
//       <View style={styles.conversationsBody}>
//         <GroupsList 
//          conversations={this.props.data}
//          navigateAction={this.props.navigateAction}
//         />
//       </View>
//     )
//   }
// }

export default ConversationsBody

import React, { Component } from 'react';

import GroupsBody from './groupsBody';
import GroupsHeader from './groupsHeader';

class GroupsPage extends Component {
  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: <GroupsHeader/>,
      headerLeft: <NavigateToUsers navigateAction={navigation.navigate}/>,      
    }
  }
  // render() {
  //   return (
  //     <Threads navigateAction={this.props.navigation.navigate}/>
  //   )
  // }
  render() {
    return (
      <GroupsBody />
    )
  }
}

export default GroupsPage

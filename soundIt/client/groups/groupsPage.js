import React, { Component } from 'react';

import GroupsBody from './groupsBody';

class GroupsPage extends Component {
  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: <ThreadHeader/>,
      // headerLeft: <NavigateToFriends navigateAction={navigation.navigate}/>,
      // headerRight: <NavigateToGroups navigateAction={navigation.navigate}/>
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

import React, { Component } from 'react';
import { 
  View,
  StyleSheet 
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// Groups

// Users
import UsersPage from '../users/usersPage';

// navigation
const LANDING = 'Users'

const FeaturesStack = StackNavigator(
  {
    Users: {
      screen: UsersPage
    }
  },
  {
    initialRouteName: LANDING
  },
  {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)

class FeaturesNavigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <FeaturesStack screenProps={this.props.screenProps}/>
      </View>
    )
  }
}

export default FeaturesNavigation

const styles = StyleSheet.create({
  container: {
    flex: 1
    // height: '100%'
  }
});

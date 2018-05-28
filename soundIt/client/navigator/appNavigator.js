import { StackNavigator } from 'react-navigation';

// Groups

// Users

// navigation
const LANDING = 'Groups'

const AppStack = StackNavigator(
  {
    Groups: {
      screen: GroupsPage
    }
  },
  {
    initialRouteName: LANDING
  }
)

export default Application


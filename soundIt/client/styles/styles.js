import { StyleSheet } from 'react-native'

const STYLES = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  newGroupForm: {
    flex: 0.25,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    backgroundColor: 'blue'
  },
  usersBody: {
    flex: 0.75
  },

  groupName: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // height: 200
  },
  label: {
    color: '#000000',
    // height: 50
  },
  inputBox: {
    borderColor:'#ff8c00',
    borderBottomColor: '#ff8c00',
    borderWidth: 1
  },
  button: {
    color: '#000000'
  },
  
  inputLine: {
    color: '#000000'
  }
})

export default STYLES
